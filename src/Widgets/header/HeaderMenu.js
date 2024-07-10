import React from "react";
import { Icon } from "Shared/svg/Icon";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage, selectPage } from "Features/store/pageSlice";
import { MenuConteiner, ButtonConteiner } from "./style";

export default function HeaderMenu() {
  const dispatch = useDispatch();
  const companyPageActive = () => dispatch(nextPage());
  const personPageActive = () => dispatch(previousPage());
  const btn_active = useSelector(selectPage);

  return (
    <div>
      <MenuConteiner>
        <ButtonConteiner btn_active={btn_active} onClick={companyPageActive}>
          <Icon id="arrow" className="arrow-icon left" /> о сотруднике
        </ButtonConteiner>
        <ButtonConteiner btn_active={btn_active - 1} onClick={personPageActive}>
          о компании
          <Icon id="arrow" className="arrow-icon right" />
        </ButtonConteiner>
      </MenuConteiner>
    </div>
  );
}
