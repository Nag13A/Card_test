import CompanyPage from "Pages/copmany/CompanyPage";
import PersonPage from "Pages/person/PersonPage";
import React from "react";
import Footer from "Widgets/footer/Footer";
import { MobileConteiner } from "./style";
import { Icon } from "Shared/svg/Icon";

export default function Mobile() {
  return (
    <MobileConteiner>
      <Icon id="man" className="mobile-logo" />
      <PersonPage />
      <Footer activePage={true} />
      <CompanyPage />
      <Footer activePage={false} />
    </MobileConteiner>
  );
}
