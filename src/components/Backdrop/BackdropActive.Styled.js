import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    backdrop-filter: blur(0);
  }
  to {
    backdrop-filter: blur(3px);
  }
`;

export const BackdropActiveDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0);
  z-index: 9;
  animation: ${fadeIn} 0.8s ease-in forwards;
`;
