import styled from "styled-components";

export const TeachersFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  gap: 20px;
  @media (min-width: 768px) {
    align-items: center;
    padding-left: 0px;
    flex-direction: row;
    padding-top: 20px;
  }
`;

export const TeachersFilterSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;
export const FilterInputDivLanguages = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 220px;
  }
`;
export const FilterInputDivLevel = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 200px;
  }
`;
export const FilterInputDivPrice = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 125px;
  }
`;

export const TeachersFilterMobaleDiv = styled.div`
  background-color: #fff;
  width: 60%;
  height: 50%;
  padding: 20px 20px;
  border-radius: 0 30px 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.01, 0.01, 0.58, 1),
    opacity 0.7s ease;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const TeachersFilterMobaleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;

  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const TeachersFilterMobaleCloseButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 20%;
`;
