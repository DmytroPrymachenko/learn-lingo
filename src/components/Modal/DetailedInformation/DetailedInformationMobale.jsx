import Star from "../../../images/svg/Star";
import StarSVG from "../../../images/svg/StarSVG";
import ImageForComent from "../../../images/png/imageForComent.png";

import TeachersListImageActive from "../../../images/svg/TeachersListImageActive";
import {} from "../../TeachersItem/TeachersItem.Styled";
import {
  BookLessonButtonTabletDiv,
  ButtonTeachersFavoriteTavlet,
  ButtonTeachersFavoriteTavletChecked,
  TeachersItemContentParamsLi,
  TeachersItemContentlevelsLi,
  TeachersItemContentlevelsUl,
  TeachersItemNameSpan,
  TeachersItemParameters,
  TeachersItemParametersText,
  TeachersItemPriceSpan,
  TeachersItemlanguagesParamsUl,
  TeachersListImageDiv,
  TeachersListImageTeacher,
  TeachersListStatusLi,
  TeachersListStatusSpan,
  TeachersListStatusUl,
} from "../../TeachersList/TeachersList.Styles";
import {
  BookLessonButtonTablet,
  DetailedInformationButtonESC,
  DetailedInformationDiv,
  DetailedInformationDivContent,
  DetailedInformationDivESC,
  DetailedInformationExperience,
  DetailedMobInfoUl,
  DetailedMobParamsContainer,
  DetailedMobUserDiv,
  DetailedMobUserNameContainer,
  DetailedMobUserNameDiv,
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

const DetailedInformationMobale = ({
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
        <>
          <DetailedMobUserDiv>
            <TeachersListImageDiv>
              <TeachersListImageTeacher src={item.avatar_url} alt="Teacher" />
              <TeachersListImageActive />
            </TeachersListImageDiv>
            <DetailedMobUserNameDiv>
              <DetailedMobUserNameContainer>
                <TeachersItemParameters>Languages</TeachersItemParameters>
                <TeachersItemNameSpan>
                  {item.name} {item.surname}
                </TeachersItemNameSpan>
              </DetailedMobUserNameContainer>
              <span>Lessons online</span>
            </DetailedMobUserNameDiv>
          </DetailedMobUserDiv>
        </>
        <>
          <DetailedMobParamsContainer>
            <ul>
              <TeachersItemContentParamsLi>
                <TeachersItemParameters>Speaks:</TeachersItemParameters>
                <TeachersItemlanguagesParamsUl>
                  {item.languages.map((language, index) => (
                    <li key={index}>{"  " + language} </li>
                  ))}
                </TeachersItemlanguagesParamsUl>
              </TeachersItemContentParamsLi>
            </ul>
            <TeachersListStatusUl>
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
            </TeachersListStatusUl>
            <TeachersListStatusSpan>
              <span>Lessons done: {item.lessons_done}</span>
            </TeachersListStatusSpan>
          </DetailedMobParamsContainer>
          <>
            <div>
              <DetailedMobInfoUl>
                <TeachersItemContentParamsLi>
                  <TeachersItemParameters>
                    Lesson Info:{" "}
                    <TeachersItemParametersText>
                      {item.lesson_info}
                    </TeachersItemParametersText>
                  </TeachersItemParameters>
                </TeachersItemContentParamsLi>
                <TeachersItemContentParamsLi>
                  <TeachersItemParameters>
                    Conditions:{" "}
                    <TeachersItemParametersText>
                      {item.conditions}
                    </TeachersItemParametersText>
                  </TeachersItemParameters>
                </TeachersItemContentParamsLi>
              </DetailedMobInfoUl>
              <DetailedInformationExperience>
                {item.experience}
              </DetailedInformationExperience>
            </div>
          </>
          <>
            <div>
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
            </div>
          </>
          <>
            <div>
              <TeachersItemContentlevelsUl>
                {item.levels.map((language, index) => (
                  <TeachersItemContentlevelsLi key={index}>
                    #{language.slice(0, 2)}
                  </TeachersItemContentlevelsLi>
                ))}
              </TeachersItemContentlevelsUl>
            </div>
          </>
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
export default DetailedInformationMobale;
