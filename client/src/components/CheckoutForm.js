import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useTranslation } from "react-i18next";
// import PlacesAutocomplete from "./PlacesAutocomplete";
import safetyIcons from "../img/paymentSafety.png";

const CheckoutForm = (props) => {
  const { type, language, cartTotal, format, bookLanguage } = props.state;
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameValid, setLastNameValid] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const serverUrl = "https://www.lvqm.me";

  const handleFirstNameChange = (value) => {
    setFirstName(value);
    if (value.length >= 2) {
      setFirstNameValid("is-primary");
    } else {
      setFirstNameValid("");
    }
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
    if (value.length >= 2) {
      setLastNameValid("is-primary");
    } else {
      setLastNameValid("");
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(value) === true) {
      setEmailValid("is-primary");
    } else {
      setEmailValid("");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      emailValid !== "is-primary" ||
      firstNameValid !== "is-primary" ||
      lastNameValid !== "is-primary"
    ) {
      if (emailValid !== "is-primary") {
        setEmailValid("is-danger");
        setErrorMessage(t("checkout.error"));
      }
      if (firstNameValid !== "is-primary") {
        setFirstNameValid("is-danger");
        setErrorMessage(t("checkout.error"));
      }
      if (lastNameValid !== "is-primary") {
        setLastNameValid("is-danger");
        setErrorMessage(t("checkout.error"));
      }
      return;
    } else {
      setPaymentLoading(true);
      // On récupère ici les données bancaires que l'utilisateur rentre
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      // Si la réponse du serveur est favorable, la transaction a eu lieu
      if (!error) {
        console.log("Token généré: ", paymentMethod);
        // Envoi du token au backend
        try {
          const { id } = paymentMethod;
          const response = await axios.post("/stripe/charge", {
            amount: cartTotal * 100,
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            zip: zipCode,
            city: city,
            coutry: country,
          });
          if (response.data.success) {
            if (type === "book") {
              try {
                const response2 = await axios.post("/emailBook/send", {
                  type: type,
                  firstName: firstName,
                  email: email,
                  bookLanguage: bookLanguage,
                });
                if (response2.data.success) {
                  props.onCompletedChange(true);
                }
              } catch (error) {
                console.log("Error !", error);
              }
            } else {
              try {
                const response3 = await axios.post("/emailCoaching/send", {
                  type: type,
                  firstName: firstName,
                  email: email,
                  language: language,
                });
                if (response3.data.success) {
                  props.onCompletedChange(true);
                }
              } catch (error) {
                console.log("Error !", error);
              }
            }
          }
        } catch (err) {
          console.log(err);
          setErrorMessage(t("checkout.cardInvalid"));
        }
      } else {
        console.log(error);
      }
      setPaymentLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="zona is-size-6 has-text-left my-5">
          {t("checkout.info")}
        </h3>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <input
                className={"input " + firstNameValid}
                type="text"
                placeholder={t("checkout.firstname")}
                value={firstName}
                onChange={(e) => {
                  handleFirstNameChange(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <input
                className={"input " + lastNameValid}
                type="text"
                placeholder={t("checkout.lastname")}
                value={lastName}
                onChange={(e) => {
                  handleLastNameChange(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <input
          className={"input mb-3 " + emailValid}
          type="email"
          placeholder={t("checkout.email")}
          value={email}
          onChange={(e) => {
            handleEmailChange(e.target.value);
          }}
        />
        <h3 className="zona is-size-6 has-text-left my-5">
          {t("checkout.payment")}
        </h3>
        <div className="paymentForm mb-3">
          <CardElement
            options={{
              hidePostalCode: true,
            }}
          />
        </div>{" "}
        {
          //format === "paper" && (
          //          <div>
          //            <PlacesAutocomplete
          //              onZipChange={(value) => {
          //                setZipCode(value);
          //              }}
          //              onCityChange={(value) => {
          //                setCity(value);
          //              }}
          //              onCountryChange={(value) => {
          //                setCountry(value);
          //              }}
          //              onAddressChange={(value) => {
          //                setAddress(value);
          //              }}
          //            />
          //            <div className="field is-horizontal">
          //              <div className="field-body">
          //                <div className="field">
          //                  <input
          //                    className="input"
          //                    type="text"
          //                    placeholder={t("checkout.zip")}
          //                   value={zipCode}
          //                   onChange={(e) => {
          //                      setZipCode(e.target.value);
          //                    }}
          //                  />{" "}
          //</div>                </div>
          //                <div className="field">
          //                  <input
          //                    className="input"
          //                    type="text"
          //                    placeholder={t("checkout.city")}
          //                    value={city}
          //                    onChange={(e) => {
          //                      setCity(e.target.value);
          //                    }}
          //                  />
          //</div>                </div>
          //                <div className="field">
          //                  <input
          //                    className="input"
          //                    type="text"
          //                    placeholder={t("checkout.country")}
          //                    value={country}
          //                    onChange={(e) => {
          //                      setCountry(e.target.value);
          //                    }}
          //                  />
          //                </div>
          //            </div>
          //            </div>
          //          </div>
          //        )}
        }
        {errorMessage && (
          <h3 className="error mt-5">{"🙏˚ " + errorMessage}</h3>
        )}
        <div className="level mt-6 mb-2 is-mobile">
          <div className="level-left">
            <div className="level-item is-valigned">
              {paymentLoading ? (
                <button
                  type="submit"
                  className={
                    "button bg-purple is-medium is-rounded cta is-loading"
                  }
                ></button>
              ) : (
                <button
                  type="submit"
                  className={"button bg-purple is-medium is-rounded cta"}
                >
                  <span className="ctaLabel zona">{t("books.shopCTA")}</span>
                </button>
              )}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <p className="productDetail purple has-text-weight-bold is-size-3">
                {cartTotal + t("productDetails.currency")}
              </p>
            </div>
          </div>
        </div>
        <figure className="image mt-5 ml-2 is-size-2" style={{ width: 150 }}>
          <img src={safetyIcons} alt="payment safety icons"></img>
        </figure>
      </form>
    </>
  );
};

export default CheckoutForm;
