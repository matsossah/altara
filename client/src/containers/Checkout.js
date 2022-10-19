import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import NavigationMenu from "../components/NavigationMenu";
import { useLocation,useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import cover from "../img/page1-fr.png";
const stripePromise = loadStripe(
  "pk_live_51L5qTIBIUbtMQI9yk3r46knCexj1nIzaw4vbWH3JC9tkDXzuWu99RvIuBYcbSifytvOjU4CMyXF2jaablZYfWv5T00DC4QXUaG"
);
// const stripePromise = loadStripe(
//  "pk_test_51L5qTIBIUbtMQI9yqbt3zZZqmMIikX6rZujVLd4VmMf642Q6iIFtzulIk8TZE6jv6nwOXBWemR9ITcLXKXNE654r00OAzBvuMd"
// );

const Checkout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const [completed, setCompleted] = useState(false);
  const {
    type,
    language,
    bookLanguage,
    bookFormat,
    cartTotal,
    coachChoice,
    formulaChoice,
  } = location.state;

  // const navigate = useNavigate();

  const formulas = {
    starter: {
      title: "Starter",
      subtitle: t("formulas.starterSubtitle"),
      price: 30,
      ebook: t("formulas.ebook"),
      group: t("formulas.group"),
      study: t("formulas.study"),
      plan: t("formulas.plan"),
      coaching: t("formulas.coaching1"),
      goodies: "",
    },
    regular: {
      title: "Regular",
      subtitle: t("formulas.regularSubtitle"),
      price: 50,
      ebook: t("formulas.ebook"),
      group: t("formulas.group"),
      study: t("formulas.study"),
      plan: t("formulas.plan"),
      coaching: t("formulas.coaching2"),
      goodies: "",
    },
    premium: {
      title: "Premium",
      subtitle: t("formulas.premiumSubtitle"),
      price: 200,
      ebook: t("formulas.ebook"),
      group: t("formulas.group"),
      study: t("formulas.study"),
      plan: t("formulas.plan"),
      coaching: t("formulas.coaching10"),
      goodies: t("formulas.goodies"),
    },
  };

  return (
    <div className=" bg-purple">
      <Elements stripe={stripePromise}>
        <NavigationMenu />
        <div className="container">
          {!completed ? (
            <div className="columns my-6 py-6">
              <div className="column my-6 py-6 is-half is-offset-one-quarter">
                <div className="box box-shadow-6">
                  <p
                    className=" py-2 zona is-size-5"
                    style={{ lineHeight: 1.5 }}
                  >
                    {t("productDetails.title")}
                  </p>
                  <p className=" is-size-6 has-text-grey-lighter">
                    ______________________________________
                  </p>
                  <h3 className="zona is-size-6 has-text-left mt-5 mb-3">
                    {t("checkout.order")}
                  </h3>
                  <div className="columns pt-3 px-3 is-mobile">
                    <div className="column is-3">
                      <figure className="image is-3by4">
                        <img src={cover} alt="Placeholder "></img>
                      </figure>
                    </div>
                    {type === "book" ? (
                      <div className="column is-9">
                        <p
                          className="is-size-6 purple zona"
                          style={{ lineHeight: 1.5 }}
                        >
                          {t("productDetails.title")}
                        </p>
                        <br />
                        <p className="is-size-6" style={{ lineHeight: 1.5 }}>
                          {t("productDetails." + bookFormat)}
                        </p>
                        <br />
                        <p className="is-size-6">
                          {t("vocab.version")}{" "}
                          {" " + bookLanguage.toUpperCase()}
                        </p>
                      </div>
                    ) : (
                      <div className="column is-9">
                        <p
                          className="is-size-6 purple zona"
                          style={{ lineHeight: 1.5 }}
                        >
                          Pack {formulas[formulaChoice]["title"]}
                        </p>
                        <p className="my-4 is-size-6">
                          {formulas[formulaChoice]["ebook"]}
                        </p>
                        <p className="my-4 is-size-6">
                          {formulas[formulaChoice]["group"]}
                        </p>
                        <p className="my-4 is-size-6">
                          {formulas[formulaChoice]["study"]}
                        </p>
                        <p className="my-4 is-size-6">
                          {formulas[formulaChoice]["plan"]}
                        </p>
                        {formulas[formulaChoice]["coaching"] !== "" && (
                          <p className="my-4 is-size-6">
                            {formulas[formulaChoice]["coaching"] +
                              " " +
                              t("vocab.with") +
                              " " +
                              coachChoice.charAt(0).toUpperCase() +
                              coachChoice.slice(1)}
                          </p>
                        )}
                        {formulas[formulaChoice]["coaching"] !== "" && (
                          <p className="my-4 is-size-6">
                            {formulas[formulaChoice]["goodies"]}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <CheckoutForm
                    state={{
                      type: type,
                      language: language,
                      cartTotal: cartTotal,
                      format: bookFormat,
                      bookLanguage: bookLanguage,
                    }}
                    onCompletedChange={(value) => {
                      setCompleted(value);
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            // navigate("/confirmation")
           
              navigate('/confirmation')
           
                        // <div className="pb-6 mb-6">
            //   <div className="level pt-6 mt-6">
            //     <div className="level-item has-text-centered level-is-shrinkable">
            //       <h2 className="zona animation mt-6 white">
            //         {t("vocab.thanks")}
            //       </h2>
            //     </div>
            //   </div>
            //   <div className="level mb-6">
            //     <div className="level-item has-text-centered level-is-shrinkable">
            //       <p className="zona animation white is-size-4">
            //         {t("checkout.orderComing")}
            //       </p>
            //     </div>
            //   </div>

            //   <div className="level">
            //     <div className="level-item has-text-centered level-is-shrinkable mb-6">
            //       <iframe
            //         src="https://giphy.com/embed/10hO3rDNqqg2Xe"
            //         title="party"
            //         width="480"
            //         height="252"
            //         frameBorder="0"
            //         className="giphy-embed"
            //       ></iframe>
            //     </div>
            //   </div>
            // </div>
          )}
        </div>
        <Footer />
      </Elements>
    </div>
  );
};

export default Checkout;
