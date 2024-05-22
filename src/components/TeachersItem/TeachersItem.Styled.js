import styled from "styled-components";

export const TeachersItemMobaleStatusDiv = styled.div`
  display: flex;
`;
export const TeachersItemMobaleStatusUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const TeachersItemMobaleStatusLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 20px;
  background-color: white;
  @media (min-width: 568px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const TeachersItemMobaleContentDiv = styled.div`
  min-width: 1px;
`;

export const TeachersItemMobaleLanguagesDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const TeachersItemMobaleButonDiv = styled.div`
  display: flex;
  padding-top: 30px;
  width: 100%;
  justify-content: space-between;
`;
export const TeachersItemMobaleButonReadMore = styled.button`
  border-radius: 12px;
  padding: 4px 10px;
  border: none;
  background: #f4c550;

  font-weight: 500;
  font-size: 16px;
  line-height: 156%;
  color: #121417;
`;
export const TeachersItemMobaleMinDiv = styled.div`
  position: relative;
`;
export const TeachersDivHeartLikeActive = styled.div`
  position: absolute;
  top: -225%;
  right: 0%;
`;
