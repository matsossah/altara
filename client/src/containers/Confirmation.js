import React, { useState } from "react";
import NavigationMenu from "../components/NavigationMenu";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import i18n from "i18next";


const Confirmation = () => {
        const { t } = useTranslation();

  return (
    <div className=" bg-purple">
        <NavigationMenu />
        <div className="container">
            <div className="pb-6 mb-6">
              <div className="level pt-6 mt-6">
                <div className="level-item has-text-centered level-is-shrinkable">
                  <h2 className="zona animation mt-6 white">
                    {t("vocab.thanks")}
                  </h2>
                </div>
              </div>
              <div className="level mb-6">
                <div className="level-item has-text-centered level-is-shrinkable">
                  <p className="zona animation white is-size-4">
                    {t("checkout.orderComing")}
                  </p>
                </div>
              </div>

              <div className="level">
                <div className="level-item has-text-centered level-is-shrinkable mb-6">
                  <iframe
                    src="https://giphy.com/embed/10hO3rDNqqg2Xe"
                    title="party"
                    width="480"
                    height="252"
                    frameBorder="0"
                    className="giphy-embed"
                  ></iframe>
                </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Confirmation;
