import styled from "styled-components";

export const HomeDivLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 20px;
  padding-bottom: 16px;
  flex-direction: column-reverse;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const HomeDivTitle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  justify-content: center;
  padding: 50px;
  background: #f8f8f8;
  @media (min-width: 1280px) {
    padding: 98px 108px 98px 64px;
  }
`;

export const HomeTitleSpan = styled.span`
  max-width: 471px;
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  letter-spacing: -0.02em;
  color: #121417;
  padding-bottom: 64px;
`;

export const HomeTitleButton = styled.button`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  border-radius: 12px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;
  background: #f4c550;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  white-space: nowrap;
`;

export const HomeStatisticsDiv = styled.div`
  position: relative;
  padding-bottom: 50px;
`;
export const HomeDottedLineDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1314px;
  margin: 0 auto;
`;
export const HomeStatisticsUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 3fr);
  justify-content: center;

  position: absolute;

  width: 95%;
  height: 100%;
  justify-items: center;
  /* sgsf */
  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    justify-content: space-between;
  }
`;
export const HomeStatisticsli = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const HomeStatisticsSpanNumber = styled.span`
  font-weight: 500;
  font-size: 28px;
  line-height: 114%;
  letter-spacing: -0.02em;
  color: #121417;
  white-space: nowrap;
`;
export const HomeStatisticsSpanText = styled.span`
  @media (max-width: 1279px) {
    max-width: 70px;
  }
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  /* white-space: nowrap; */
  width: 100%;
`;

export const HomeFrameLanguage = styled.div`
  @media (max-width: 630px) {
    width: 150px;
    height: 35px;
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 40px;
  padding-bottom: 7px;
  background: #fbe9ba;
  border-radius: 8px;
  z-index: 1;
  margin: 0 8px;
`;
export const HomeTitleH1 = styled.h1`
  max-width: 548px;
  @media (max-width: 630px) {
    font-size: 35px;
  }

  font-size: 48px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #121417;
  padding-bottom: 32px;
  position: relative;
  background: transparent;
  z-index: 2;
`;
