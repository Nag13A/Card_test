import React from "react";
import { Icon } from "Shared/svg/Icon";
import { VectorTop, MainConteiner, InfoConteiner } from "./style";
import Photo from "./photo/Photo";
import PersonLinks from "./links/PersonLinks";

export default function PersonPage() {
  return (
    <MainConteiner>
      <Photo />
      <InfoConteiner>
        <Icon id="man" className="logo" />
        <VectorTop />
        <PersonLinks />
      </InfoConteiner>
    </MainConteiner>
  );
}
