import React from "react";
import { CompanyConteiner, VectorTop } from "./style";
import AboutCompany from "./about/AboutCompany";
import CompanyLinks from "./links/CompanyLinks";

export default function CompanyPage() {
  return (
    <>
      <VectorTop />
      <CompanyConteiner>
        <AboutCompany />
        <CompanyLinks />
      </CompanyConteiner>
    </>
  );
}
