import { useEffect, useState } from "react";
import HeartLike from "../../images/svg/HeartLike";
import HeartLikeActive from "../../images/svg/HeartLikeActive";
import LessonsOnlineSVG from "../../images/svg/LessonsOnlineSVG";
import StarSVG from "../../images/svg/StarSVG";
import TeachersListImageActive from "../../images/svg/TeachersListImageActive";
import {
  ButtonTeachersFavorite,
  TeachersItemNameSpan,
  TeachersItemParameters,
  TeachersItemPriceSpan,
  TeachersItemlanguagesParamsUl,
  TeachersListImageDiv,
  TeachersListImageTeacher,
  TeachersListStatusLi,
} from "../TeachersList/TeachersList.Styles";
import {
  TeachersDivHeartLikeActive,
  TeachersItemMobaleButonDiv,
  TeachersItemMobaleButonReadMore,
  TeachersItemMobaleContentDiv,
  TeachersItemMobaleLanguagesDiv,
  TeachersItemMobaleMinDiv,
  TeachersItemMobaleStatusDiv,
  TeachersItemMobaleStatusLi,
  TeachersItemMobaleStatusUl,
} from "./TeachersItem.Styled";

const TeachersItemMobale = ({
  item,
  handleFavoriteClick,
  checked,
  handleShowModalItem,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <TeachersItemMobaleStatusLi>
      <div>
        <>
          <TeachersListImageDiv>
            <TeachersListImageTeacher src={item.avatar_url} alt="Teacher" />
            <TeachersListImageActive />
          </TeachersListImageDiv>
          <TeachersItemNameSpan>
            {item.name} {item.surname}
          </TeachersItemNameSpan>
          <TeachersItemMobaleLanguagesDiv>
            <TeachersItemParameters>Speaks:</TeachersItemParameters>
            <TeachersItemlanguagesParamsUl>
              {item.languages.map((language, index) => (
                <li key={index}>{"  " + language} </li>
              ))}
            </TeachersItemlanguagesParamsUl>
          </TeachersItemMobaleLanguagesDiv>
        </>
      </div>
      <>
        {windowWidth < 568 ? (
          <>
            <TeachersItemMobaleMinDiv>
              <ul>
                <TeachersListStatusLi>
                  <StarSVG />
                  <span>Rating: {item.rating}</span>
                </TeachersListStatusLi>
                <TeachersListStatusLi>
                  <span>Price / 1 hour:</span>

                  <TeachersItemPriceSpan>
                    {item.price_per_hour}$
                  </TeachersItemPriceSpan>
                </TeachersListStatusLi>
              </ul>
              <div>
                <>
                  <TeachersItemMobaleButonReadMore
                    onClick={handleShowModalItem}
                  >
                    Read more
                  </TeachersItemMobaleButonReadMore>
                </>
              </div>
              <TeachersDivHeartLikeActive>
                <>
                  <ButtonTeachersFavorite onClick={handleFavoriteClick}>
                    {checked ? <HeartLikeActive /> : <HeartLike />}
                  </ButtonTeachersFavorite>
                </>
              </TeachersDivHeartLikeActive>
            </TeachersItemMobaleMinDiv>
          </>
        ) : (
          <>
            <TeachersItemMobaleContentDiv>
              <TeachersItemMobaleStatusDiv>
                <TeachersItemMobaleStatusUl>
                  <TeachersListStatusLi>
                    <LessonsOnlineSVG />
                    <span>Lessons online</span>
                  </TeachersListStatusLi>
                  <TeachersListStatusLi>
                    <span>Lessons done: {item.lessons_done}</span>
                  </TeachersListStatusLi>
                  <TeachersListStatusLi>
                    <StarSVG />
                    <span>Rating: {item.rating}</span>
                  </TeachersListStatusLi>
                  <TeachersListStatusLi>
                    <span>Price / 1 hour:</span>

                    <TeachersItemPriceSpan>
                      {item.price_per_hour}$
                    </TeachersItemPriceSpan>
                  </TeachersListStatusLi>
                </TeachersItemMobaleStatusUl>
              </TeachersItemMobaleStatusDiv>
              <TeachersItemMobaleButonDiv>
                <>
                  <TeachersItemMobaleButonReadMore
                    onClick={handleShowModalItem}
                  >
                    Read more
                  </TeachersItemMobaleButonReadMore>
                </>
                <>
                  <ButtonTeachersFavorite onClick={handleFavoriteClick}>
                    {checked ? <HeartLikeActive /> : <HeartLike />}
                  </ButtonTeachersFavorite>
                </>
              </TeachersItemMobaleButonDiv>
            </TeachersItemMobaleContentDiv>
          </>
        )}
      </>
    </TeachersItemMobaleStatusLi>
  );
};

export default TeachersItemMobale;
