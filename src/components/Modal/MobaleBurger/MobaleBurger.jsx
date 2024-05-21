import { useSelector } from "react-redux";

import { MobaleBurgerDiv } from "./MobaleBurger.Styled";

import { selectUser } from "../../../store/selected";

import { Link } from "react-router-dom";

const MobaleBurger = ({ isOpen }) => {
  const user = useSelector(selectUser);
  return (
    <MobaleBurgerDiv className={isOpen ? "open" : ""}>
      <Link to="/" aria-label="Home" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link
        to="/teachers"
        aria-label="Teachers"
        style={{ textDecoration: "none" }}
      >
        Teachers
      </Link>
      {user && (
        <Link
          to="/favorites"
          aria-label="Teachers"
          style={{ textDecoration: "none" }}
        >
          Favorites
        </Link>
      )}
    </MobaleBurgerDiv>
  );
};

export default MobaleBurger;
