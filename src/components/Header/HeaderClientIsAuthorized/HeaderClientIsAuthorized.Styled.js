import styled from "styled-components";

export const ClientIsAuthorizedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClientIsAuthorizedNameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;
export const ClientIsAuthorizedName = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
`;
export const ClientIsAuthorizedLogOut = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
`;
export const ClientIsAuthorizedButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: color 0.5s ease;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover,
  &:focus {
    & > span {
      color: #f4c550;
    }
  }
`;
