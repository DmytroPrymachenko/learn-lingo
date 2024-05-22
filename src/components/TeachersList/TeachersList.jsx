import {
  TeachersListDiv,
  TeachersListLoadMore,
  TeachersListUl,
} from "./TeachersList.Styles";

import { nanoid } from "nanoid";
import TeachersItem from "../TeachersItem/TeachersItem";
import { useEffect, useState } from "react";
import AbsentTeachers from "../Modal/AbsentTeachers/AbsentTeachers";
import BackdropActive from "../Backdrop/BackdropActive";
import IsLoading from "../IsLoading/IsLoading";
// import {
//   getDatabase,
//   limitToFirst,
//   onValue,
//   query,
//   ref,
// } from "firebase/database";

const TeachersList = ({ dataList, setTest }) => {
  const [teachersList, setTeachersList] = useState(null);
  const [loadedItems, setLoadedItems] = useState(4);
  const [isLoadingState, setIsLoading] = useState(false);
  const [favoriteChanged, setFavoriteChanged] = useState(false);

  const handleFavoriteChange = () => {
    setFavoriteChanged(!favoriteChanged);
  };

  useEffect(() => {
    if (dataList) {
      setIsLoading(true);

      setTeachersList(dataList);
      setIsLoading(false);
      console.log(favoriteChanged);
    }
  }, [dataList, favoriteChanged]);

  const handleLoadMore = () => {
    setLoadedItems((prevLoadedItems) => prevLoadedItems + 4);
  };

  return (
    <>
      {isLoadingState && (
        <>
          <IsLoading />
        </>
      )}
      {!teachersList ? (
        <>
          <AbsentTeachers />
          <BackdropActive />
        </>
      ) : (
        <TeachersListDiv>
          <TeachersListUl>
            {teachersList.slice(0, loadedItems).map((item) => (
              <TeachersItem
                key={nanoid()}
                item={item}
                handleFavoriteChange={handleFavoriteChange}
                setTest={setTest}
              />
            ))}
          </TeachersListUl>
          {teachersList.length > loadedItems && (
            <TeachersListLoadMore onClick={handleLoadMore}>
              Load more
            </TeachersListLoadMore>
          )}
        </TeachersListDiv>
      )}
    </>
  );
};
export default TeachersList;
