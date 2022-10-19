import React, { useState } from "react";
import i18n from "i18next";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import page1FR from "../img/page1-fr.png";
import page2FR from "../img/page2-fr.png";
import page3FR from "../img/page3-fr.png";
import page4FR from "../img/page4-fr.png";
import page5FR from "../img/page5-fr.png";
import page6FR from "../img/page6-fr.png";
import page7FR from "../img/page7-fr.png";
import page8FR from "../img/page8-fr.png";
import page9FR from "../img/page9-fr.png";
import page10FR from "../img/page10-fr.png";
import page1EN from "../img/page1-en.png";
import page2EN from "../img/page2-en.png";
import page3EN from "../img/page3-en.png";
import page4EN from "../img/page4-en.png";
import page5EN from "../img/page5-en.png";
import page6EN from "../img/page6-en.png";
import page7EN from "../img/page7-en.png";
import page8EN from "../img/page8-en.png";
import page9EN from "../img/page9-en.png";
import page10EN from "../img/page10-en.png";
import safetyIcons from "../img/paymentSafety.png";
import ebookImageFR from "../img/ebookImage-fr.png";
import ebookImageEN from "../img/ebookImage-en.png";
import paperImageFR from "../img/paperImage-fr.png";
import paperImageEN from "../img/paperImage-en.png";

const Books = () => {
  const { t } = useTranslation();
  var language = i18n.language.substring(0, 2);

  var book;
  if (language === "fr") {
    book = [
      page1FR,
      page2FR,
      page3FR,
      page4FR,
      page5FR,
      page6FR,
      page7FR,
      page8FR,
      page9FR,
      page10FR,
    ];
  } else if (language === "en") {
    book = [
      page1EN,
      page2EN,
      page3EN,
      page4EN,
      page5EN,
      page6EN,
      page7EN,
      page8EN,
      page9EN,
      page10EN,
    ];
  }

  const formats = {
    ebook: {
      title: t("productDetails.ebook"),
      price: 2,
      image: { en: ebookImageEN, fr: ebookImageFR },
    },
    paper: {
      title: t("productDetails.paper"),
      price: t("vocab.soon"),
      image: { en: paperImageEN, fr: paperImageFR },
    },
    //    paperEbook: {
    //      title: t("productDetails.paperEbook"),
    //      price: (15.9).toFixed(2),
    //      image: { en: comboImageEN, fr: comboImageFR },
    //    },
  };

  const [bookLanguage, setBookLanguage] = useState(language);
  const [bookFormat, setBookFormat] = useState("ebook");
  const [bookTotal, setBookTotal] = useState(2);
  const [bookImage, setBookImage] = useState(
    formats["ebook"]["image"][language]
  );

  const lngs = {
    fr: { nativeName: "Français", flag: "🇫🇷", color: "" },
    en: { nativeName: "English", flag: "🇺🇸", color: "" },
  };

  if (bookLanguage === "fr") {
    lngs["en"].color = "is-white";
    lngs["fr"].color = "is-light";
  } else {
    lngs["en"].color = "is-light";
    lngs["fr"].color = "is-white";
  }

  const bookLanguageChoice = (lng) => {
    setBookLanguage(lng);

    if (bookLanguage === "en") {
      lngs["en"].color = "is-light";
      lngs["fr"].color = "is-white";
    } else {
      lngs["en"].color = "is-white";
      lngs["fr"].color = "is-light";
    }
    setBookImage(formats[bookFormat]["image"][lng]);
  };

  const bookFormatChoice = (format) => {
    setBookFormat(format);
    setBookTotal(formats[format].price);
    setBookImage(formats[format]["image"][bookLanguage]);
  };

  return (
    <div>
      <NavigationMenu />
      <div className="container pt-6">
        <h1 className="big-title zona pt-6 mt-6 has-text-centered">
          {t("books.finally")}
          <span className="purple">.</span>
        </h1>
        <div className="level px-5 py-5">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1 has-text-centered mt-6 mx-5">
              {t("books.description")}
            </h2>
          </div>
        </div>
        <h3 className="zona has-text-centered mt-6">{t("books.priceCatch")}</h3>
        <p className="has-text-centered is-size-6 mt-3">
          {t("books.cheaperFree")}
        </p>
        <div className="level px-5">
          <div className="level-item has-text-centered">
            <CTA
              label={t("books.cta")}
              destination={"/books"}
              onClick={(e) => {
                let hero = document.getElementById("hero");
                e.preventDefault(); // Stop Page Reloading
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                style: "button bg-purple is-medium is-rounded mx-5 my-6 cta",
              }}
            />
          </div>
        </div>
        <div className="columns py-6 my-6 is-gapless is-vcentered">
          <div className="column">
            <img src={bookImage} alt="product detail cover"></img>
          </div>
          <div className="column">
            <div className="box box-shadow-6">
              <p className=" py-2 zona is-size-5" style={{ lineHeight: 1.5 }}>
                {t("productDetails.title")}
              </p>
              <p className=" is-size-6 has-text-grey-lighter">
                ______________________________________
              </p>
              <h3 className="zona is-size-6 has-text-left mt-4 mb-3">
                {t("productDetails.language")}
              </h3>
              <div className="level mb-2 is-mobile">
                <div className=" level-left">
                  {Object.keys(lngs).map((lng) => (
                    <div key={lng}>
                      <button
                        className={"button " + lngs[lng].color}
                        onClick={() => bookLanguageChoice(lng)}
                      >
                        <a href="#0">{lngs[lng].flag}</a>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <p className="is-size-6 has-text-grey-lighter">
                ______________________________________
              </p>

              <h3 className="zona is-size-6 has-text-left my-5">
                {t("productDetails.format")}
              </h3>
              {Object.keys(formats).map((format) => (
                <div className="level mb-4 is-mobile" key={format}>
                  <div className="level-left">
                    <div className="level-item">
                      <div className="control">
                        {format === "paper" ? (
                          <label
                            className="radio has-text-left is-valigned"
                            disabled
                          >
                            <input
                              type="radio"
                              name="answer"
                              onChange={() => bookFormatChoice(format)}
                              checked={format === bookFormat}
                              disabled
                            ></input>
                          </label>
                        ) : (
                          <label className="radio has-text-left is-valigned">
                            <input
                              type="radio"
                              name="answer"
                              onChange={() => bookFormatChoice(format)}
                              checked={format === bookFormat}
                            ></input>
                          </label>
                        )}
                      </div>
                    </div>
                    <div className="level-item">
                      <p className="productDetail">{formats[format].title}</p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <p className="productDetail purple has-text-weight-bold">
                        {formats[format].price === 2
                          ? formats[format].price +
                            " " +
                            t("productDetails.currency")
                          : formats[format].price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <p className="is-size-6 has-text-grey-lighter">
                ______________________________________
              </p>
              <div className="level mt-6 mb-2 is-mobile">
                <div className="level-left">
                  <div className="level-item is-valigned">
                    <CTA
                      id={"submit"}
                      type={"link"}
                      label={t("books.shopCTA")}
                      destination="/checkout"
                      state={{
                        type: "book",
                        bookLanguage: bookLanguage,
                        bookFormat: bookFormat,
                        cartTotal: bookTotal,
                      }}
                      style={{
                        style:
                          "button bg-purple is-medium is-rounded mx-5 my-3 cta",
                      }}
                    />
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="productDetail purple has-text-weight-bold is-size-3">
                      {bookTotal + " " + t("productDetails.currency")}
                    </p>
                  </div>
                </div>
              </div>
              <figure
                className="image mt-5 ml-2 is-size-2"
                style={{ width: 150 }}
              >
                <img src={safetyIcons} alt="payment safety icons"></img>
              </figure>
            </div>
          </div>
        </div>
        <div id="hero" className="mb-6 pb-6" />
        <div className="level px-5">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1">{t("books.title")}</h2>
          </div>
        </div>
        <div className="box has-background-white has-text-grey-dark mt-6">
          <Carousel
            additionalTransfrom={0}
            shouldResetAutoplay={false}
            arrows
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {book.map((page) => (
              <div className="card mx-3" key={page}>
                <figure className="image is-3by4">
                  <img src={page} alt="Placeholder "></img>
                </figure>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Books;
