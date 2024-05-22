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
  closeModal,
}) => {
  const user = useSelector(selectUser);
  const handleLogOut = () => {
    closeModal();
    openLogAut();
  };

  const handleLogin = () => {
    closeModal();
    openModalLogin();
  };

  const handleRegister = () => {
    closeModal();
    openModalRegister();
  };
  const handleLinkClick = () => {
    closeModal();
  };
  const CustomLink = ({ to, children, ...props }) => (
    <Link
      to={to}
      onClick={handleLinkClick}
      style={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </Link>
  );

  return (
    <>
      <MobaleBurgerDiv className={isOpen ? "open" : ""}>
        <MobaleBurgerContainerDiv>
          <CustomLink to="/" aria-label="Home">
            Home
          </CustomLink>
          <CustomLink to="/teachers" aria-label="Teachers">
            Teachers
          </CustomLink>
          {user && (
            <CustomLink to="/favorites" aria-label="Teachers">
              Favorites
            </CustomLink>
          )}
          {user ? (
            <>
              <button onClick={handleLogOut}>Вийти</button>
            </>
          ) : (
            <>
              <button onClick={handleLogin}>Log in</button>
              <button onClick={handleRegister}>Registration</button>
            </>
          )}
        </MobaleBurgerContainerDiv>
      </MobaleBurgerDiv>
    </>
  );
};

export default MobaleBurger;
