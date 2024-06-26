import styled from "styled-components";
export const ModalDivLogin = styled.div``;

export const ModalLoginFormDiv = styled.div``;

export const ModalLoginForm = styled.form`
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
export const ModalLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  max-width: 438px;
`;
export const ModalLoginPasswordVisibility = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const ModalLoginSpan = styled.span`
  padding-bottom: 40px;
`;
export const ModalLoginDivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 40px;
`;
export const ModalLoginH1 = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  padding-bottom: 20px;
`;

export const ModalLoginInput = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 16px 16px 18px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.6s ease, border-color 0.6s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
    border-color: #f4c550;
    outline: none;
  }
  position: relative;
`;
export const ModalLoginInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
export const ModalLoginButton = styled.button`
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
  transition: transform 0.3s ease, background 0.3s ease;

  &:focus,
  &:hover {
    background: #ffdc86;
    transform: scale(1.05);
  }
`;
