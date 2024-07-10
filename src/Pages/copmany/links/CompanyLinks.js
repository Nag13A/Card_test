import React from "react";
import { Conteiner, Link } from "./style";
import phoneMask from "Features/phoneMask";
import Data from "Entites/Data";
import { Icon } from "Shared/svg/Icon";

export default function CompanyLinks() {
  const {
    number,
    mail,
    site,
    address,
    addressСoordinates,
    date,
    clients,
    fax,
  } = Data.company;
  return (
    <Conteiner>
      <Link href={`tel:+${number}`}>
        <Icon id="mobile" className="info-contacts" />
        {phoneMask(number)}
      </Link>
      <Link href={`mailto:${mail}`}>
        <Icon id="mail" className="info-contacts" />
        {mail}
      </Link>
      <Link href={`https://${site}`} target="_blank">
        <Icon id="site" className="info-contacts" />
        {site}
      </Link>
      <Link
        href={`https://maps.google.com?Location&daddr=
              ${addressСoordinates}`}
        target="_blank"
      >
        <Icon id="address" className="info-contacts" />
        {address}
      </Link>
      <Link>
        <Icon id="date" className="info-contacts" />
        {date}
      </Link>
      <Link>
        <Icon id="user" className="info-contacts" />
        {clients}
      </Link>
      <Link href={`tel:+${fax}`}>
        <Icon id="fax" className="info-contacts" />
        {phoneMask(fax)}
      </Link>
    </Conteiner>
  );
}
