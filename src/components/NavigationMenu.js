import React, { useState } from "react";
import Altara from "../img/ALTARA.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";
import '../index.css';

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
    day1: location.pathname === "/day1" ? "is-underlined" : "",
    day2: location.pathname === "/day2" ? "is-underlined" : "",
    day3: location.pathname === "/day3" ? "is-underlined" : "",
    day4: location.pathname === "/day4" ? "is-underlined" : "",
    day5: location.pathname === "/day5" ? "is-underlined" : "",
    day6: location.pathname === "/day6" ? "is-underlined" : "",
    day7: location.pathname === "/day7" ? "is-underlined" : "",
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
              src={Altara}
              alt="logo Altara"
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
              to="/day1"
              className={"navbar-item zona " + tabSelected.day1}
            >
              {t("nav.day1")}
            </Link>
            <Link
              to="/day2"
              className={"navbar-item zona " + tabSelected.day2}
            >
              {t("nav.day2")}
            </Link>
            <Link
              to="/day3"
              className={"navbar-item zona " + tabSelected.day3}
            >
              {t("nav.day3")}
            </Link>
            <Link
              to="/day4"
              className={"navbar-item zona " + tabSelected.day4}
            >
              {t("nav.day4")}
            </Link>
            <Link
              to="/day5"
              className={"navbar-item zona " + tabSelected.day5}
            >
              {t("nav.day5")}
            </Link>
            <Link
              to="/day6"
              className={"navbar-item zona " + tabSelected.day6}
            >
              {t("nav.day6")}
            </Link>
            <Link
              to="/day7"
              className={"navbar-item zona " + tabSelected.day7}
            >
              {t("nav.day7")}
            </Link>
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
