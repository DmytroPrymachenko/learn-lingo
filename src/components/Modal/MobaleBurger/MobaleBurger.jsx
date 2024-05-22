import { useSelector } from "react-redux";
import {
  MobaleBurgerContainerDiv,
  MobaleBurgerDiv,
  MobaleBurgerLink,
  MobaleBurgerUserDiv,
} from "./MobaleBurger.Styled";
import { selectUser } from "../../../store/selected";

import IconHero from "../../../images/svg/IconHero";

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
    <MobaleBurgerLink
      to={to}
      onClick={handleLinkClick}
      style={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </MobaleBurgerLink>
  );

  return (
    <>
      <MobaleBurgerDiv className={isOpen ? "open" : ""}>
        <MobaleBurgerContainerDiv>
          <MobaleBurgerUserDiv>
            <IconHero />
            <span>Hi, {user ? user.name : "friend"}</span>
          </MobaleBurgerUserDiv>
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
