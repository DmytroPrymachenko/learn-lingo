import { useSelector } from "react-redux";
import {
  HeaderDivLink,
  HeaderLink,
  HeaderLinkLogo,
  HeaderLinkLogoDiv,
} from "../Header.Styled";
import HeaderClientIsAuthorized from "../HeaderClientIsAuthorized/HeaderClientIsAuthorized";
import HeaderNeedAuthorization from "../HeaderNeedAuthorization/HeaderNeedAuthorization";
import { selectUser } from "../../../store/selected";

import IconHeader from "../../../images/svg/IconHeader";

const HeaderDesktop = ({ openModalLogin, openModalRegister, openLogAut }) => {
  const user = useSelector(selectUser);
  return (
    <>
      <HeaderLinkLogoDiv>
        <HeaderLinkLogo
          to="/"
          aria-label="logo and return to the main page"
          style={{ textDecoration: "none" }}
        >
          <IconHeader />
        </HeaderLinkLogo>
      </HeaderLinkLogoDiv>
      <HeaderDivLink>
        <HeaderLink to="/" aria-label="Home" style={{ textDecoration: "none" }}>
          Home
        </HeaderLink>
        <HeaderLink
          to="/teachers"
          aria-label="Teachers"
          style={{ textDecoration: "none" }}
        >
          Teachers
        </HeaderLink>
        {user && (
          <HeaderLink
            to="/favorites"
            aria-label="Teachers"
            style={{ textDecoration: "none" }}
          >
            Favorites
          </HeaderLink>
        )}
      </HeaderDivLink>
      {user ? (
        <HeaderClientIsAuthorized openLogAut={openLogAut} />
      ) : (
        <HeaderNeedAuthorization
          openModalLogin={openModalLogin}
          openModalRegister={openModalRegister}
        />
      )}
    </>
  );
};

export default HeaderDesktop;
