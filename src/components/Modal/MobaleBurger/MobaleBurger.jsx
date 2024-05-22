import { useSelector } from "react-redux";

import {
  MobaleBurgerContainerDiv,
  MobaleBurgerDiv,
} from "./MobaleBurger.Styled";

import { selectUser } from "../../../store/selected";

import { Link } from "react-router-dom";

const MobaleBurger = ({
  isOpen,
  openModalLogin,
  openModalRegister,
  openLogAut,
}) => {
  const user = useSelector(selectUser);

  return (
    <>
      <MobaleBurgerDiv className={isOpen ? "open" : ""}>
        <MobaleBurgerContainerDiv>
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
          {user ? (
            <>
              <button onClick={openLogAut}>Вийти</button>
            </>
          ) : (
            <>
              <button onClick={openModalLogin}>Log in</button>
              <button onClick={openModalRegister}>Registration</button>
            </>
          )}
        </MobaleBurgerContainerDiv>
      </MobaleBurgerDiv>
    </>
  );
};

export default MobaleBurger;
