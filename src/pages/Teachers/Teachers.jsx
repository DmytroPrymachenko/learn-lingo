import { useEffect, useState } from "react";

import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersList";

import { getDatabase, ref, onValue } from "firebase/database";
import { query } from "firebase/database";
import { SectionTeachers } from "./Teachers.Styles";
import TeachersFilterMobale from "../../components/TeachersFilter/TeachersFilterMobale";
import IsLoading from "../../components/IsLoading/IsLoading";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [teachersFilter, setTeachersFilter] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
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

  const db = getDatabase();

  useEffect(() => {
    setIsLoading(true);
    const countRef = query(ref(db, "teachers"));
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setTeachersData(data);
      setIsLoading(false);
    });
  }, [db]);

  useEffect(() => {
    if (teachersData) {
      setFilteredList(teachersFilter || teachersData);
    }
  }, [teachersFilter, teachersData]);

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

export default Teachers;
