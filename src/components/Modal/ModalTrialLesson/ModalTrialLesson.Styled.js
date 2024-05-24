import styled from "styled-components";

export const ModalTrialLessonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: fixed;
`;

export const ModalTrialForm = styled.div`
  min-width: 300px;

  max-width: 472px;
  background-color: #fff;
  padding: 24px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalTrialAvatarImg = styled.img`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`;

export const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;

  opacity: 0;
`;
export const RadioInputDiv = styled.div`
  position: relative;
  height: 18px;
  z-index: 9;
`;

export const RadioInputIconDiv = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  z-index: -1;
`;
export const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: center;
  color: #121417;
  cursor: pointer;
  &:hover {
    color: #f4c550;
  }

  &:focus {
    color: #f4c550;
  }
  &:checked {
    color: red;
  }
`;
export const RadioLi = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;
export const RadioUl = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 17px;
  justify-content: center;
  padding-bottom: 40px;
`;
export const ModalTrialExperienced = styled.span`
  @media (max-width: 1280px) {
    font-size: 14px;
  }
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
`;

export const ModalTrialInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
`;

export const ModalTrialInput = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 16px 16px 18px;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #f4c550;
    box-shadow: 0 0 5px #f4c550;
    transform: scale(1.02);
  }

  &:focus {
    border-color: #f4c550;
    box-shadow: 0 0 5px #f4c550;
    outline: none;
    transform: scale(1.02);
  }
`;
export const ModalTrialSpanError = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;

  color: red;
`;
export const ModalTrialButton = styled.button`
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  background: #f4c550;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  width: 100%;
  border: none;
  transition: background-color 0.5s ease, transform 0.4s ease;

  &:hover,
  &:focus {
    background-color: #fbe9ba;
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ModalTrialH1 = styled.h1`
  @media (max-width: 1280px) {
    font-size: 32px;
  }
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
`;
export const ModalTrialH2 = styled.h2`
  @media (max-width: 1280px) {
    font-size: 18px;
  }
  font-weight: 500;
  font-size: 24px;
  line-height: 133%;

  padding-bottom: 20px;
`;
export const ModalTrialTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 10px;
    padding-bottom: 20px;
  }

  gap: 20px;
  padding-bottom: 40px;
`;
export const ModalTrialAvatarTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const ModalTrialAvatarNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;
export const ModalTrialYourTeacherSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
`;
export const ModalTrialNameSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`;
