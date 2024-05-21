import { HeaderSection } from "./Header.Styled";

import { useEffect, useState } from "react";
import ModalRegister from "../Modal/ModalAuth/ModalRegister";
import ModalLogin from "../Modal/ModalAuth/ModalLogin";

import Backdrop from "../Backdrop/Backdrop";

import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobale from "./HeaderMobale/HeaderMobale";

const Header = () => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openModalLogin = () => {
    setIsModalLogin((prevState) => !prevState);
  };
  const openModalRegister = () => {
    setIsModalRegister((prevState) => !prevState);
  };

  const closeModal = () => {
    setIsModalLogin(false);
    setIsModalRegister(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {isModalLogin && (
        <>
          <Backdrop closeModal={closeModal} />
          <ModalLogin closeModal={closeModal} />
        </>
      )}

      {isModalRegister && (
        <>
          <Backdrop closeModal={closeModal} />
          <ModalRegister closeModal={closeModal} />
        </>
      )}
      <HeaderSection>
        {windowWidth < 768 ? (
          <HeaderMobale
            openModalLogin={openModalLogin}
            openModalRegister={openModalRegister}
          />
        ) : (
          <HeaderDesktop
            openModalLogin={openModalLogin}
            openModalRegister={openModalRegister}
          />
        )}
      </HeaderSection>
    </>
  );
};

export default Header;
