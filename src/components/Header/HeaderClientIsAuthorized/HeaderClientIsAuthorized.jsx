import { useSelector } from "react-redux";
import { selectUser } from "../../../store/selected";

import IconHero from "../../../images/svg/IconHero";

import {
  ClientIsAuthorizedButton,
  ClientIsAuthorizedDiv,
  ClientIsAuthorizedLogOut,
  ClientIsAuthorizedName,
  ClientIsAuthorizedNameDiv,
} from "./HeaderClientIsAuthorized.Styled";
import IconHeaderLogin from "../../../images/svg/IconHeaderLogin";

const HeaderClientIsAuthorized = ({ openLogAut }) => {
  const user = useSelector(selectUser);

  return (
    <>
      <ClientIsAuthorizedDiv>
        <ClientIsAuthorizedNameDiv>
          <IconHero />
          <ClientIsAuthorizedName>{user.name}</ClientIsAuthorizedName>
        </ClientIsAuthorizedNameDiv>
        <ClientIsAuthorizedButton onClick={openLogAut}>
          <IconHeaderLogin />
          <ClientIsAuthorizedLogOut>Log out</ClientIsAuthorizedLogOut>
        </ClientIsAuthorizedButton>
      </ClientIsAuthorizedDiv>
    </>
  );
};

export default HeaderClientIsAuthorized;
