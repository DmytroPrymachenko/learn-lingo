import LessonsOnlineSVG from "../../../images/svg/LessonsOnlineSVG";
import Star from "../../../images/svg/Star";
import StarSVG from "../../../images/svg/StarSVG";
import ImageForComent from "../../../images/png/imageForComent.png";

import TeachersListImageActive from "../../../images/svg/TeachersListImageActive";
import {
  TeachersItemMobaleLanguagesDiv,
  TeachersItemMobaleStatusDiv,
  TeachersItemMobaleStatusUl,
} from "../../TeachersItem/TeachersItem.Styled";
import {
  BookLessonButtonTabletDiv,
  ButtonTeachersFavoriteTavlet,
  ButtonTeachersFavoriteTavletChecked,
  TeachersItemContentParamsLi,
  TeachersItemContentlevelsLi,
  TeachersItemNameSpan,
  TeachersItemParameters,
  TeachersItemPriceSpan,
  TeachersItemlanguagesParamsUl,
  TeachersListImageDiv,
  TeachersListImageTeacher,
  TeachersListStatusLi,
} from "../../TeachersList/TeachersList.Styles";
import {
  BookLessonButtonTablet,
  DetailedInformationButtonESC,
  DetailedInformationDiv,
  DetailedInformationDivContent,
  DetailedInformationDivESC,
  DetailedInformationExperience,
  DetailedInformationMobaleContentlevelsUl,
  DetailedInformationMobaleUserDiv,
  DetailedReviewsComment,
  DetailedReviewsDiv,
  DetailedReviewsName,
  DetailedReviewsRatingSpan,
  DetailedReviewsStarRatingDiv,
  ImageForComentDiv,
} from "./DetailedInformation.Styled";
import HeartLikeActive from "../../../images/svg/HeartLikeActive";
import HeartLike from "../../../images/svg/HeartLike";
import SVGEsc from "../../../images/svg/SVGEsc";

const DetailedInformationTablet = ({
  item,
  checked,
  handleToggleFavorite,
  closeModal,
  handleTrialLesson,
}) => {
  const handleToggle = () => {
    handleToggleFavorite(item);
  };
  return (
    <DetailedInformationDiv>
      <DetailedInformationDivContent>
        <DetailedInformationDivESC>
          <DetailedInformationButtonESC onClick={closeModal}>
            <SVGEsc />
          </DetailedInformationButtonESC>
        </DetailedInformationDivESC>
        <DetailedInformationMobaleUserDiv>
          <div>
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
          </div>
          <div>
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

            <DetailedInformationMobaleContentlevelsUl>
              {item.levels.map((language, index) => (
                <TeachersItemContentlevelsLi key={index}>
                  #{language}
                </TeachersItemContentlevelsLi>
              ))}
            </DetailedInformationMobaleContentlevelsUl>
          </div>
        </DetailedInformationMobaleUserDiv>
        <>
          <ul>
            <TeachersItemContentParamsLi>
              <TeachersItemParameters>Lesson Info:</TeachersItemParameters>
              <p>{item.lesson_info}</p>
            </TeachersItemContentParamsLi>
            <TeachersItemContentParamsLi>
              <TeachersItemParameters>Conditions:</TeachersItemParameters>
              <p>{item.conditions}</p>
            </TeachersItemContentParamsLi>
          </ul>
          <DetailedInformationExperience>
            {item.experience}
          </DetailedInformationExperience>
        </>
        <>
          <ul>
            {item.reviews.map((reviews, index) => (
              <li key={index}>
                <DetailedReviewsDiv>
                  <ImageForComentDiv>
                    {reviews.avatar_url ? (
                      <img src={reviews.avatar_url} alt="Teacher" />
                    ) : (
                      <img
                        src={ImageForComent}
                        alt="Image Person For Coment "
                      />
                    )}
                  </ImageForComentDiv>
                  <div>
                    <DetailedReviewsName>
                      {reviews.reviewer_name}
                    </DetailedReviewsName>
                    <DetailedReviewsStarRatingDiv>
                      <Star />
                      <DetailedReviewsRatingSpan>
                        {reviews.reviewer_rating}.0
                      </DetailedReviewsRatingSpan>
                    </DetailedReviewsStarRatingDiv>
                  </div>
                </DetailedReviewsDiv>
                <DetailedReviewsComment>
                  {reviews.comment}
                </DetailedReviewsComment>
              </li>
            ))}
          </ul>
        </>
        <BookLessonButtonTabletDiv>
          <BookLessonButtonTablet onClick={handleTrialLesson}>
            Book trial lesson
          </BookLessonButtonTablet>

          <>
            {checked ? (
              <ButtonTeachersFavoriteTavletChecked onClick={handleToggle}>
                <HeartLikeActive />
                <span>Remove from favorites</span>
              </ButtonTeachersFavoriteTavletChecked>
            ) : (
              <ButtonTeachersFavoriteTavlet onClick={handleToggle}>
                <HeartLike />
                <span>Add to favorites</span>
              </ButtonTeachersFavoriteTavlet>
            )}
          </>
        </BookLessonButtonTabletDiv>
      </DetailedInformationDivContent>
    </DetailedInformationDiv>
  );
};

export default DetailedInformationTablet;
