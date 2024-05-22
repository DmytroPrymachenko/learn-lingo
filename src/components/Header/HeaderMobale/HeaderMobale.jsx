import { Link } from "react-router-dom";
import IconHeader from "../../../images/svg/IconHeader";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/selected";

import HeaderNeedAuthorization from "../HeaderNeedAuthorization/HeaderNeedAuthorization";
import {
  ClientIsAuthorizedDiv,
  ClientIsAuthorizedName,
  ClientIsAuthorizedNameDiv,
} from "../HeaderClientIsAuthorized/HeaderClientIsAuthorized.Styled";
import IconHero from "../../../images/svg/IconHero";
import { BurgerButton, HeaderMobaleDiv } from "./HeaderMobale.Styled";
import { useState } from "react";
import BackdropActive from "../../Backdrop/BackdropActive";
import MobaleBurger from "../../Modal/MobaleBurger/MobaleBurger";
import TestTest from "./TestTest";

const HeaderMobale = ({ openModalLogin, openModalRegister, openLogAut }) => {
  const user = useSelector(selectUser);
  const [isMobaleBurger, setIsMobaleBurger] = useState(false);
  const [isBackdropActiveOpen, setIsBackdropActiveOpen] = useState(false);

  const handleStateChange = () => {
    setIsMobaleBurger(!isMobaleBurger);
    setIsBackdropActiveOpen(true);
  };

  const closeModal = () => {
    setIsMobaleBurger(false);
    setIsBackdropActiveOpen(false);
  };

  return (
    <>
      <>
        {isBackdropActiveOpen && <BackdropActive closeModal={closeModal} />}
        {setIsMobaleBurger && (
          <>
            <MobaleBurger
              openLogAut={openLogAut}
              closeModal={closeModal}
              isOpen={isMobaleBurger}
              openModalLogin={openModalLogin}
              openModalRegister={openModalRegister}
            />
          </>
        )}
      </>
      <HeaderMobaleDiv>
        <div>
          <Link
            to="/"
            aria-label="logo and return to the main page"
            style={{ textDecoration: "none" }}
          >
            <IconHeader />
          </Link>
        </div>
        {user ? (
          <>
            <ClientIsAuthorizedDiv>
              <ClientIsAuthorizedNameDiv>
                <IconHero />
                <ClientIsAuthorizedName>{user.name}</ClientIsAuthorizedName>
              </ClientIsAuthorizedNameDiv>

              <>
                <BurgerButton onClick={handleStateChange}>
                  <TestTest />
                </BurgerButton>
              </>
            </ClientIsAuthorizedDiv>
          </>
        ) : (
          <HeaderNeedAuthorization
            openModalLogin={openModalLogin}
            openModalRegister={openModalRegister}
          />
        )}
      </HeaderMobaleDiv>
    </>
  );
};

export default HeaderMobale;
