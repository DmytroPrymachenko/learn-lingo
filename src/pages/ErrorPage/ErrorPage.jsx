import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/selected";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AbsentContentDiv,
  AbsentCountdown,
  AbsentH1,
  AbsentLink,
  AbsentSpan,
  AbsentTeachersDiv,
} from "../../components/Modal/AbsentTeachers/AbsentTeachers.Styled";
import Backdrop from "../../components/Backdrop/Backdrop";

const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(9);
  const userName = useSelector(selectUser);

  useEffect(() => {
    if (countdown <= 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, location.pathname, navigate]);

  const closeModal = () => {
    navigate("/");
  };
  return (
    <>
      <Backdrop closeModal={closeModal} />
      <AbsentTeachersDiv>
        <AbsentContentDiv>
          <AbsentH1>
            Hello, {userName && userName.name ? userName.name : "Friend"}!
          </AbsentH1>
          <AbsentSpan>
            You have navigated to a page that doesn&apos;t exist. For your
            convenience, you will be redirected to the main page in{" "}
            <AbsentCountdown>{countdown}</AbsentCountdown> seconds.
          </AbsentSpan>
          <AbsentSpan>
            To go there immediately, click the button below.
          </AbsentSpan>
          <AbsentLink
            to="/"
            aria-label="Home button"
            style={{ textDecoration: "none" }}
          >
            button
          </AbsentLink>
        </AbsentContentDiv>
      </AbsentTeachersDiv>
    </>
  );
};

export default ErrorPage;
