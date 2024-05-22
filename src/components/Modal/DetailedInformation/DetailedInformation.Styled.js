import styled from "styled-components";

export const DetailedInformationDiv = styled.div`
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
    transform: translate(-50%, -50%) scale(1.05); /* Enlarge on hover */
  }
`;
export const DetailedInformationForm = styled.div`
  display: flex;

  gap: 48px;
`;

export const DetailedInformationExperience = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  max-width: 968px;
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
`;
