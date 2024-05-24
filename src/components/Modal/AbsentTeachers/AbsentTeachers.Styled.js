import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const AbsentTeachersDiv = styled.div`
  min-width: 300px;
  background-color: #fff;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
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
export const AbsentLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;

  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;

  &:focus,
  &:hover {
    background: #ffdc86;
    transform: scale(1.05);
  }
`;
export const AbsentH1 = styled.h1``;
export const AbsentSpan = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  color: #121417;
`;

export const AbsentContentDiv = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  max-width: 370px;
`;

export const AbsentCountdown = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  background-color: #f4c550;
  padding: 0 7px;
  border-radius: 5px;
`;
