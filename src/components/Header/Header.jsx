import { HeaderSection } from "./Header.Styled";

import { useEffect, useState } from "react";
import ModalRegister from "../Modal/ModalAuth/ModalRegister";
import ModalLogin from "../Modal/ModalAuth/ModalLogin";

import Backdrop from "../Backdrop/Backdrop";

import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobale from "./HeaderMobale/HeaderMobale";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
import BackdropActive from "../Backdrop/BackdropActive";
import ModalLogAut from "../Modal/ModalLogAut/ModalLogAut";
import IsLoading from "../IsLoading/IsLoading";

const Header = () => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isModalLogAut, setisModalLogAut] = useState(false);

  useEffect(() => {
    if (isModalLogin || isModalRegister || isModalLogAut) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalLogin, isModalRegister, isModalLogAut]);

  function logAut() {
    setIsLoading(true);
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success(`Sign-out successful. Goodbye!`);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  const openLogAut = () => {
    setisModalLogAut(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // Вийти

  const openModalLogin = () => {
    setIsModalLogin((prevState) => !prevState);
  };
  const openModalRegister = () => {
    setIsModalRegister((prevState) => !prevState);
  };

  const closeModal = () => {
    setIsModalLogin(false);
    setIsModalRegister(false);
    setisModalLogAut(false);
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
      {isLoading && (
        <>
          <IsLoading />
        </>
      )}
      {isModalLogAut && (
        <>
          <BackdropActive closeModal={closeModal} />
          <ModalLogAut logAut={logAut} closeModal={closeModal} />
        </>
      )}
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
            openLogAut={openLogAut}
            openModalLogin={openModalLogin}
            openModalRegister={openModalRegister}
          />
        ) : (
          <HeaderDesktop
            openLogAut={openLogAut}
            openModalLogin={openModalLogin}
            openModalRegister={openModalRegister}
          />
        )}
      </HeaderSection>
    </>
  );
};

export default Header;
