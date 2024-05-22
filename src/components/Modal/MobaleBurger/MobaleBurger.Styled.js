import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobaleBurgerDiv = styled.div`
  background-color: #fff;
  width: 60%;
  height: 50%;

  border-radius: 0 0 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
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
export const MobaleBurgerContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

export const MobaleBurgerUserDiv = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const MobaleBurgerLink = styled(NavLink)`
  font-weight: 500;
  font-size: 12px;
  line-height: 88%;
  letter-spacing: -0.02em;
  color: #121417;
`;
