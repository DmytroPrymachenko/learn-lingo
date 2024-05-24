import { useEffect, useState } from "react";

import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersList";

import { getDatabase, ref, onValue } from "firebase/database";
import { query } from "firebase/database";
import { SectionTeachers } from "../Teachers/Teachers.Styles";
import TeachersFilterMobale from "../../components/TeachersFilter/TeachersFilterMobale";
import IsLoading from "../../components/IsLoading/IsLoading";

const Favorites = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [favoritesData, setFavoritesData] = useState(null);
  const [teachersFilter, setTeachersFilter] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getFavoritesFromLocalStorage();
  }, []);

  const getFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    setIsLoading(false);
  };

  const db = getDatabase();

  useEffect(() => {
    setIsLoading(true);
    const countRef = query(ref(db, "teachers"));
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setFavoritesData(data);
      setIsLoading(false);
    });
  }, [db]);

  useEffect(() => {
    if (teachersData) {
      setFilteredList(teachersFilter || teachersData);
    }
  }, [teachersFilter, teachersData]);

  useEffect(() => {
    setIsLoading(true);
    if (favorites.length > 0 && favoritesData) {
      const filteredTeachers = favorites
        .map((favoriteId) =>
          favoritesData.find((teacher) => teacher && teacher.id === favoriteId)
        )
        .filter((teacher) => teacher !== undefined);
      setTeachersData(filteredTeachers);
    }
    setIsLoading(false);
  }, [favoritesData, favorites]);

  return (
    <>
      {isLoading && (
        <>
          <IsLoading />
        </>
      )}
      <SectionTeachers>
        {windowWidth < 768 ? (
          <TeachersFilterMobale
            data={teachersData}
            setTeachersFilter={setTeachersFilter}
          />
        ) : (
          <TeachersFilter
            data={teachersData}
            setTeachersFilter={setTeachersFilter}
          />
        )}

        <TeachersList dataList={filteredList} />
      </SectionTeachers>
    </>
  );
};

export default Favorites;
