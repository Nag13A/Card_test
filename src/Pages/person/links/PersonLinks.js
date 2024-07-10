import React from "react";
import {
  LinkConteoner,
  Surname,
  Name,
  Position,
  PersonConteiner,
  Link,
} from "./style";
import Data from "Entites/Data";
import phoneMask from "Features/phoneMask";
import { Icon } from "Shared/svg/Icon";

export default function PersonLinks() {
  const {
    main_number,
    first_number,
    second_number,
    mail,
    site,
    address,
    addressСoordinates,
    date,
    rank,
    name,
    surname,
    patronymic,
    position,
  } = Data.person;

  return (
    <PersonConteiner>
      <Surname> {surname} </Surname>
      <Name>
        {name} {patronymic}
      </Name>
      <Position>{position}</Position>
      <LinkConteoner>
        <Link href={`tel:+${main_number}`}>
          <Icon id="mobile" className="info-contacts" />
          {phoneMask(main_number)}
        </Link>
        <Link href={`tel:+${first_number}`}>
          <Icon id="phone" className="info-contacts" />
          {phoneMask(first_number)}
        </Link>
        <Link href={`tel:+${second_number}`}>
          <Icon id="phone" className="info-contacts" />
          {phoneMask(second_number)}
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
          {rank}
        </Link>
      </LinkConteoner>
    </PersonConteiner>
  );
}
