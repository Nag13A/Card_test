import React from "react";
import Data from "Entites/Data";
import { MainConteiner, IconsConteiner, Vector } from "./style";
import { Icon } from "Shared/svg/Icon";

export default function Footer({ activePage }) {
  const { Links } = activePage ? Data.person : Data.company;

  return (
    <MainConteiner>
      <Vector />
      <IconsConteiner>
        {Links.map((Links) => (
          <a key={Links.id} href={Links.url}>
            <Icon id={Links.title} className="footer" />
          </a>
        ))}
      </IconsConteiner>
    </MainConteiner>
  );
}
