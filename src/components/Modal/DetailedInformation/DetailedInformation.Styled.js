import styled from "styled-components";

export const DetailedInformationDiv = styled.div`
  @media (max-width: 650px) {
    padding: 12px;
    overflow-y: auto;
    max-height: 80vh;
    width: 80%;
  }
  min-width: 300px;
  background-color: #fff;
  padding: 24px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: transform 0.3s ease;
  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;
export const DetailedInformationForm = styled.div`
  display: flex;

  gap: 48px;
`;
export const DetailedInformationDivLikEndExit = styled.div`
  display: flex;

  gap: 4px;
`;
export const DetailedInformationExperience = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  max-width: 968px;
`;
export const DetailedInformationButtonESC = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;
export const DetailedInformationDivESC = styled.div`
  position: absolute;
  @media (max-width: 650px) {
    top: 0%;
    right: -1%;
  }
  top: -2%;
  right: -2%;
`;
export const DetailedInformationDivContent = styled.div`
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  position: relative;
`;
export const ImageForComentDiv = styled.div`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`;

export const DetailedReviewsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;
export const DetailedReviewsStarRatingDiv = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
`;
export const DetailedReviewsRatingSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #121417;
`;
export const DetailedReviewsName = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;

export const DetailedReviewsComment = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`;

export const BookLessonButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px 48px;
  border: none;
  cursor: pointer;
`;

export const BookLessonButtonTablet = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 8px 24px;
  border: none;
  cursor: pointer;
`;

export const DetailedInformationMobaleUserDiv = styled.div`
  display: flex;
  position: relative;
`;

export const DetailedInformationMobaleContentlevelsUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 8px;
  > li:first-child {
    border: none;
    background: #f4c550;
  }
`;

export const DetailedMobUserNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const DetailedMobUserDiv = styled.div`
  display: flex;
  gap: 20px;
`;
export const DetailedMobUserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailedMobParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
export const DetailedMobInfoUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 20px;
`;
