import { useState } from "react";
import BackdropActive from "../Backdrop/BackdropActive";
import TeachersFilter from "./TeachersFilter";
import {
  TeachersFilterMobaleButton,
  TeachersFilterMobaleCloseButton,
  TeachersFilterMobaleDiv,
} from "./TeachersFilter.Styles";
import FilterSVG from "../../images/svg/FilterSVG";

const TeachersFilterMobale = ({ data, setTeachersFilter }) => {
  const [isModalFilterMobale, setIsModalFilterMobale] = useState(false);
  const [isBackdropActiveOpen, setIsBackdropActiveOpen] = useState(false);

  const openModal = () => {
    setIsModalFilterMobale(!isModalFilterMobale);
    setIsBackdropActiveOpen(true);
  };

  const closeModal = () => {
    setIsModalFilterMobale(false);
    setIsBackdropActiveOpen(false);
  };

  return (
    <div>
      <>
        {isBackdropActiveOpen && <BackdropActive closeModal={closeModal} />}
        {setIsModalFilterMobale && (
          <>
            <TeachersFilterMobaleDiv
              className={isModalFilterMobale ? "open" : ""}
            >
              <TeachersFilter
                data={data}
                setTeachersFilter={setTeachersFilter}
              />
              <TeachersFilterMobaleCloseButton>
                <TeachersFilterMobaleButton onClick={closeModal}>
                  <FilterSVG />
                  <span>Close Filter</span>
                </TeachersFilterMobaleButton>
              </TeachersFilterMobaleCloseButton>
            </TeachersFilterMobaleDiv>
          </>
        )}
      </>
      <TeachersFilterMobaleButton onClick={openModal}>
        <FilterSVG />
        <span>Filter</span>
      </TeachersFilterMobaleButton>
    </div>
  );
};

export default TeachersFilterMobale;
