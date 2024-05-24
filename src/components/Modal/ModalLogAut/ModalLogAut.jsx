import { useSelector } from "react-redux";
import {
  LogAutButtonClose,
  LogAutButtonDiv,
  LogAutButtonlogAut,
  LogAutDiv,
  LogAutH1,
  LogAutSpan,
  ModalLogAutDiv,
} from "./ModalLogAut.Styled";
import { selectUser } from "../../../store/selected";
import { AuthorizationButtonEsc } from "../AuthorizationMessage/AuthorizationMessage.Styled";
import SVGEsc from "../../../images/svg/SVGEsc";

const ModalLogAut = ({ logAut, closeModal }) => {
  const userName = useSelector(selectUser);

  const handleLogAut = () => {
    logAut();
    closeModal();
  };

  return (
    <ModalLogAutDiv>
      <LogAutDiv>
        <LogAutH1>Hi, {userName ? userName.name : ""}!</LogAutH1>
        <LogAutSpan>
          Are you sure you want to log out of your account?
        </LogAutSpan>
        <LogAutButtonDiv>
          <LogAutButtonClose onClick={closeModal}>Close</LogAutButtonClose>
          <LogAutButtonlogAut onClick={handleLogAut}>LogAut</LogAutButtonlogAut>
        </LogAutButtonDiv>
      </LogAutDiv>
      <AuthorizationButtonEsc onClick={closeModal}>
        <SVGEsc />
      </AuthorizationButtonEsc>
    </ModalLogAutDiv>
  );
};

export default ModalLogAut;
