import { DetailedInformationDivContent } from "../DetailedInformation/DetailedInformation.Styled";
import SVGEsc from "../../../images/svg/SVGEsc";

import {
  RemoveTeacherButton,
  RemoveTeacherButtonDiv,
  RemoveTeacherButtonESC,
  RemoveTeacherDiv,
  RemoveTeacherH1,
  RemoveTeacherSpan,
} from "./RemoveTeacher.Styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/selected";

const RemoveTeacher = ({ handleRemoveFavorite, closeModal, item }) => {
  const user = useSelector(selectUser);

  return (
    <RemoveTeacherDiv>
      <DetailedInformationDivContent>
        <RemoveTeacherButtonESC onClick={closeModal}>
          <SVGEsc />
        </RemoveTeacherButtonESC>

        <RemoveTeacherH1>
          <RemoveTeacherSpan>{user.name}</RemoveTeacherSpan>, are you sure you
          want to remove teacher{" "}
          <RemoveTeacherSpan>
            {item.name} {item.surname}
          </RemoveTeacherSpan>{" "}
          from your favorites?
        </RemoveTeacherH1>

        <RemoveTeacherButtonDiv>
          <RemoveTeacherButton onClick={handleRemoveFavorite}>
            Delete
          </RemoveTeacherButton>
          <RemoveTeacherButton onClick={closeModal}>Cancel</RemoveTeacherButton>
        </RemoveTeacherButtonDiv>
      </DetailedInformationDivContent>
    </RemoveTeacherDiv>
  );
};

export default RemoveTeacher;
