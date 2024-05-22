import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AbsentContentDiv,
  AbsentCountdown,
  AbsentH1,
  AbsentLink,
  AbsentSpan,
  AbsentTeachersDiv,
} from "./AbsentTeachers.Styled";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../store/selected";

const AbsentTeachers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(9);
  const userName = useSelector(selectUserName);

  useEffect(() => {
    if (countdown <= 0) {
      if (location.pathname === "/favorites") {
        navigate("/teachers");
      } else if (location.pathname === "/teachers") {
        navigate("/");
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, location.pathname, navigate]);

  return (
    <AbsentTeachersDiv>
      <AbsentContentDiv>
        {location.pathname === "/favorites" ? (
          <>
            <AbsentH1>Hello, {userName}!</AbsentH1>
            <AbsentSpan>
              You haven&apos;t chose a favorite teacher. You will be redirected
              to the Teachers page in{" "}
              <AbsentCountdown>{countdown}</AbsentCountdown> seconds. Press the
              button to move faster.
            </AbsentSpan>
            <AbsentLink
              to="/teachers"
              aria-label="Home teachers"
              style={{ textDecoration: "none" }}
            >
              button
            </AbsentLink>
          </>
        ) : location.pathname === "/teachers" ? (
          <>
            <AbsentH1>Hello, {userName ? userName : "Friend"}!</AbsentH1>
            <AbsentSpan>
              We&apos;re sorry, but a technical error occured. Service is
              unavaliable. Please, try again later. You will be redirected to
              the Main page in <AbsentCountdown>{countdown}</AbsentCountdown>{" "}
              seconds. Press the button to move faster.
            </AbsentSpan>
            <AbsentLink
              to="/"
              aria-label="Home button"
              style={{ textDecoration: "none" }}
            >
              button
            </AbsentLink>
          </>
        ) : null}
      </AbsentContentDiv>
    </AbsentTeachersDiv>
  );
};

export default AbsentTeachers;
