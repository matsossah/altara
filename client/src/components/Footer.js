import React from "react";
import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <footer className="footer mt-6 is-fixed-bottom">
      <div className="content  mt-3">
        <p className="home px-5 pt-3 has-text-weight-bold is-size-3 has-text-centered">
          {t("footer.emoji")}
        </p>
        <p
          className="home px-5 py-3 has-text-weight-bold is-size-4 has-text-centered"
          style={{ lineHeight: 1.5 }}
        >
          {t("footer.tagline")}
        </p>
        <p className="content is-size-6 has-text-centered">
          {t("footer.description")}
        </p>
        <div className="content is-size-6 has-text-centered">
          <div className="has-text-centered button is-light">
            <a href={t("footer.instaURL")} className="ax-2 zona">
              {t("footer.insta")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
