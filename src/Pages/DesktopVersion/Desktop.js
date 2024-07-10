import React from "react";
import HeaderMenu from "Widgets/header/HeaderMenu";
import CompanyPage from "Pages/copmany/CompanyPage";
import PersonPage from "Pages/person/PersonPage";
import Footer from "Widgets/footer/Footer";
import { MainConteiner } from "./style";
import { selectPage } from "Features/store/pageSlice";
import { useSelector } from "react-redux";

export default function Desktop() {
  const isActivePage = useSelector(selectPage);
  const activePage = isActivePage ? <PersonPage /> : <CompanyPage />;
  return (
    <>
      <HeaderMenu />
      <MainConteiner>
        {activePage}
        <Footer activePage={isActivePage} />
      </MainConteiner>
    </>
  );
}
