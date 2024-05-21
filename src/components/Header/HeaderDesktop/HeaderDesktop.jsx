import { useSelector } from "react-redux";
import { HeaderDivLink, HeaderLink } from "../Header.Styled";
import HeaderClientIsAuthorized from "../HeaderClientIsAuthorized/HeaderClientIsAuthorized";
import HeaderNeedAuthorization from "../HeaderNeedAuthorization/HeaderNeedAuthorization";
import { selectUser } from "../../../store/selected";
import { Link } from "react-router-dom";
import IconHeader from "../../../images/svg/IconHeader";

const HeaderDesktop = ({ openModalLogin, openModalRegister }) => {
  const user = useSelector(selectUser);
  return (
    <>
      <div>
        <Link
          to="/"
          aria-label="logo and return to the main page"
          style={{ textDecoration: "none" }}
        >
          <IconHeader />
        </Link>
      </div>
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
        <HeaderClientIsAuthorized />
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
