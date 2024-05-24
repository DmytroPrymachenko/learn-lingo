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
  padding-right: 30px;
  padding-left: 30px;
`;

export const MobaleBurgerUserDiv = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const MobaleBurgerLink = styled(NavLink)`
  width: 120px;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #121417;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #f4c550;
    border-radius: 50%;
    transition: width 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
  }

  &.active::before {
    width: 20px;
    opacity: 1;
  }

  &.inactive::before {
    width: 0;
    opacity: 0;
  }
  &.active {
    color: #f4c550;
  }
`;
export const MobaleBurgerUserH1 = styled.h1``;
export const MobaleBurgerButton = styled.button`
  border-radius: 12px;
  padding: 8px 24px;
  cursor: pointer;
  border: none;
  background: #f4c550;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  &:hover,
  &:focus {
    background: #ffdc86;
    box-shadow: 0 0 0 2px #ffdc86;
    transform: scale(1.05);
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }
`;
