import GridLoader from "react-spinners/GridLoader";
import styled from "styled-components";

export const IsLoadingDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IsLoading = () => {
  return (
    <IsLoadingDiv>
      <div>
        <GridLoader color="#F4C550" loading margin={50} size={50} />
      </div>
    </IsLoadingDiv>
  );
};

export default IsLoading;
