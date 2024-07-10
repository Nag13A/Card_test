import React from "react";
import { Icon } from "Shared/svg/Icon";
import { MainConteiner, CompanyName, CompanyInfo } from "./style";
import Data from "Entites/Data";

export default function AboutCompany() {
  const { name, info } = Data.company;
  return (
    <>
      <MainConteiner>
        <Icon id="man" className="logo" />
        <CompanyName>{name}</CompanyName>
        <CompanyInfo>{info}</CompanyInfo>
      </MainConteiner>
    </>
  );
}
