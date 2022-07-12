import React, { useState } from "react";
import LogoLVQM from "../img/logo-lvqm.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";

const lngs = {
  fr: { nativeName: "Français", flag: "🇫🇷", color: "" },
  en: { nativeName: "English", flag: "🇺🇸", color: "" },
};

const NavigationMenu = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const [burgerActive, setBurgerActive] = useState(false);
  const [tabSelected] = useState({
    home: location.pathname === "/" ? "is-underlined" : "",
    books: location.pathname === "/books" ? "is-underlined" : "",
    coaching: location.pathname === "/coaching" ? "is-underlined" : "",
    //    community: location.pathname === "/community" ? "is-underlined" : "",
  });

  let currentlanguage = i18n.language;
  if (currentlanguage === "en") {
    lngs["en"].color = "is-light";
    lngs["fr"].color = "is-white";
  } else {
    lngs["en"].color = "is-white";
    lngs["fr"].color = "is-light";
  }

  const onHandleLanguageChoice = (lng) => {
    i18n.changeLanguage(lng);
    // Reload the home page when changing language for the Typoanimation to work (advised in their doc)
    if (location.pathname === "/") {
      window.location.reload();
    }
  };
  const handleMenuPress = () => {
    setBurgerActive(!burgerActive);
  };
  return (
    <div>
      <nav className="navbar is-white is-fixed-top">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src={LogoLVQM}
              alt="logo LVQM"
              style={{ height: 45, width: 160 }}
              className="mx-2 my-2"
            ></img>
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#0"
            onClick={() => handleMenuPress()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          className={burgerActive ? "navbar-menu is-active" : "navbar-menu"}
          id="nav-links"
        >
          <div className="navbar-end">
            <Link to="/" className={"navbar-item zona " + tabSelected.home}>
              {t("nav.home")}
            </Link>
            <Link
              to="/books"
              className={"navbar-item zona " + tabSelected.books}
            >
              {t("nav.books")}
            </Link>
            <Link
              to="/coaching"
              className={"navbar-item zona " + tabSelected.coaching}
            >
              {t("nav.coaching")}
            </Link>
            {
              //            <Link
              //              to="/community"
              //              className={"navbar-item zona " + tabSelected.community}
              //</div>            >
              //</div>             {t("nav.community")}
              //           </Link>
            }
          </div>
          <div className="navbar-end">
            {Object.keys(lngs).map((lng) => (
              <div key={lng} className="navbar-item">
                <button
                  className={"button " + lngs[lng].color}
                  onClick={() => onHandleLanguageChoice(lng)}
                >
                  <a href="#0" className="ax-2 ">
                    {lngs[lng].flag}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
