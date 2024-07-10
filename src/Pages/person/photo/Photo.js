import React from "react";
import SimpleSlider from "Pages/person/photo/PhotoSlider/SimpleSlider";
import {
  PhotoConteiner,
  SimpleSliderConteiner,
  AddBtn,
  ButtonMobile,
  BtnConteiner,
} from "./style";
import { Icon } from "Shared/svg/Icon";
import saveVCard from "Features/saveVCard";
import Data from "Entites/Data";

export default function Photo() {
  const { main_number } = Data.person;
  return (
    <PhotoConteiner>
      <SimpleSliderConteiner>
        <SimpleSlider />
      </SimpleSliderConteiner>
      <AddBtn onClick={() => saveVCard()}>Добавить в контакты</AddBtn>
      <BtnConteiner>
        <ButtonMobile onClick={() => saveVCard()}>
          <Icon id="save" className="photo-btn" />
          сохранить визитку
        </ButtonMobile>
        <ButtonMobile href={`tel:+${main_number}`}>
          <Icon id="call" className="photo-btn" />
          позвонить
        </ButtonMobile>
      </BtnConteiner>
    </PhotoConteiner>
  );
}
