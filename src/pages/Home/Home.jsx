import HomePicture from "../../images/png/HomePicture";
import DottedLineHome from "../../images/svg/DottedLineHome/DottedLineHome";
import {
  HomeDivLeft,
  HomeDivTitle,
  HomeDottedLineDiv,
  HomeFrameLanguage,
  HomeStatisticsDiv,
  HomeStatisticsSpanNumber,
  HomeStatisticsSpanText,
  HomeStatisticsUl,
  HomeStatisticsli,
  HomeTitleButton,
  HomeTitleH1,
  HomeTitleSpan,
} from "./Home.Styled";
import { useEffect, useState } from "react";
import DottedLineHomeTablet from "../../images/svg/DottedLineHome/DottedLineHomeTablet";
import DottedLineHomeMobile from "../../images/svg/DottedLineHome/DottedLineHomeMobile";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section>
        <HomeDivLeft>
          <HomeDivTitle>
            <HomeTitleH1>
              Unlock your potential with the best
              <HomeFrameLanguage>language</HomeFrameLanguage> tutors
            </HomeTitleH1>
            <HomeTitleSpan>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </HomeTitleSpan>
            <HomeTitleButton to="/teachers">Get started</HomeTitleButton>
          </HomeDivTitle>
          <div>
            <HomePicture />
          </div>
        </HomeDivLeft>
      </section>
      <section>
        <HomeStatisticsDiv>
          <HomeDottedLineDiv>
            {windowWidth < 480 ? (
              <DottedLineHomeMobile />
            ) : windowWidth < 1280 ? (
              <DottedLineHomeTablet />
            ) : (
              <DottedLineHome />
            )}

            <HomeStatisticsUl>
              <HomeStatisticsli>
                <HomeStatisticsSpanNumber>32,000 +</HomeStatisticsSpanNumber>
                <HomeStatisticsSpanText>
                  Experienced tutors
                </HomeStatisticsSpanText>
              </HomeStatisticsli>
              <HomeStatisticsli>
                <HomeStatisticsSpanNumber>300,000 +</HomeStatisticsSpanNumber>
                <HomeStatisticsSpanText>
                  5-star tutor reviews
                </HomeStatisticsSpanText>
              </HomeStatisticsli>
              <HomeStatisticsli>
                <HomeStatisticsSpanNumber>120 +</HomeStatisticsSpanNumber>
                <HomeStatisticsSpanText>Subjects taught</HomeStatisticsSpanText>
              </HomeStatisticsli>
              <HomeStatisticsli>
                <HomeStatisticsSpanNumber>200 +</HomeStatisticsSpanNumber>
                <HomeStatisticsSpanText>
                  Tutor nationalities
                </HomeStatisticsSpanText>
              </HomeStatisticsli>
            </HomeStatisticsUl>
          </HomeDottedLineDiv>
        </HomeStatisticsDiv>
      </section>
    </>
  );
};

export default Home;
