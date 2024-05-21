import styled from "styled-components";

export const HeaderMobaleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BurgerButton = styled.button`
  display: flex;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:hover,
  &:focus {
    svg path {
      fill: #f4c550;
    }
  }
`;
