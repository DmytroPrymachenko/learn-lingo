import styled from "styled-components";

export const RemoveTeacherH1 = styled.h1`
  @media (max-width: 650px) {
    font-size: 30px;
  }
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  max-width: 678px;
`;
export const RemoveTeacherSpan = styled.span`
  color: #f4c550;
`;
export const RemoveTeacherDiv = styled.div`
  @media (max-width: 650px) {
    padding: 24px;
    overflow-y: auto;
    min-width: 320px;
    width: 80%;
  }
  width: 708px;
  background-color: #fff;
  padding: 64px;
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

export const RemoveTeacherButtonESC = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  @media (max-width: 650px) {
    top: -5%;
    right: -7%;
  }
  top: -49px;
  right: -7%;
`;

export const RemoveTeacherButtonDiv = styled.div`
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;
  }
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;
export const RemoveTeacherButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  padding: 16px 88px;
  border: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:focus,
  &:hover {
    background: #ffdc86;
    transform: scale(1.05);
  }
`;
