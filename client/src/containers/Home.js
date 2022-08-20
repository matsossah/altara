import React from "react";
import i18n from "i18next";
import coverPicFR from "../img/coverImage-FR.png";
import coverPicEN from "../img/coverImage-EN.png";
import paperBackFR from "../img/paperBack.jpg";
import paperBackEN from "../img/book_en.jpeg";
import barbara from "../img/barbara.png";
import barbaraProfile from "../img/barbaraProfile.png";
import marie from "../img/marie.png";
import marieProfile from "../img/marieProfile.png";
import dennis from "../img/dennis.png";
import dennisProfile from "../img/dennisProfile.png";
import lionel from "../img/lionel.png";
import lionelProfile from "../img/lionelProfile.png";
import jeanne from "../img/jeanne.png";
import jeanneProfile from "../img/jeanneProfile.png";
import mira from "../img/mira.png";
import miraProfile from "../img/miraProfile.png";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import TypoAnimation from "../components/TypoAnimation";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const { t } = useTranslation();
  var language = i18n.language.substring(0, 2);
  console.log(language);

  var coverPic;
  if (language === "fr") {
    coverPic = coverPicFR;
  } else if (language === "en") {
    coverPic = coverPicEN;
  }

  var paperBack;
  if (language === "fr") {
    paperBack = paperBackFR;
  } else if (language === "en") {
    paperBack = paperBackEN;
  }

  const cards1 = {
    peace: {
      emoji: t("cards.peaceEmoji"),
      title: t("cards.peaceTitle"),
      description: t("cards.peaceContent"),
    },
    body: {
      emoji: t("cards.bodyEmoji"),
      title: t("cards.bodyTitle"),
      description: t("cards.bodyContent"),
    },
    health: {
      emoji: t("cards.healthEmoji"),
      title: t("cards.healthTitle"),
      description: t("cards.healthContent"),
    },
  };
  const cards2 = {
    peace: {
      emoji: t("cards.communityEmoji"),
      title: t("cards.communityTitle"),
      description: t("cards.communityContent"),
    },
    body: {
      emoji: t("cards.manifestationEmoji"),
      title: t("cards.manifestationTitle"),
      description: t("cards.manifestationContent"),
    },
    health: {
      emoji: t("cards.passionEmoji"),
      title: t("cards.passionTitle"),
      description: t("cards.passionContent"),
    },
  };

  const lists = {
    pros: {
      first: t("pros.first"),
      second: t("pros.second"),
      third: t("pros.third"),
      fourth: t("pros.fourth"),
      fifth: t("pros.fifth"),
      sixth: t("pros.sixth"),
    },
    cons: {
      first: t("cons.first"),
      second: t("cons.second"),
      third: t("cons.third"),
      fourth: t("cons.fourth"),
      fifth: t("cons.fifth"),
      sixth: t("cons.sixth"),
    },
  };

  const faqs = {
    book: {
      uuid: "a",
      title: t("faq.book"),
      emoji: t("faq.bookEmoji"),
      text: t("faq.bookText"),
    },
    coaching: {
      uuid: "b",
      title: t("faq.coaching"),
      emoji: t("faq.coachingEmoji"),
      text: t("faq.coachingText"),
    },
    experts: {
      uuid: "c",
      title: t("faq.experts"),
      emoji: t("faq.expertsEmoji"),
      text: t("faq.expertsText"),
    },
    community: {
      uuid: "d",
      title: t("faq.community"),
      emoji: t("faq.communityEmoji"),
      text: t("faq.communityText"),
    },
  };

  const testimonials = {
    barbara: {
      profilePic: barbaraProfile,
      backgroundImage: barbara,
      title: t("testimonials.barbaraTitle"),
      subtitle: t("testimonials.barbaraSubtitle"),
      link: "https://www.instagram.com/barbaraopsomer",
      description: t("testimonials.barbaraDescription"),
    },
    lionel: {
      profilePic: lionelProfile,
      backgroundImage: lionel,
      title: t("testimonials.lionelTitle"),
      subtitle: t("testimonials.lionelSubtitle"),
      link: "https://www.instagram.com/lionel.ingende/",
      description: t("testimonials.lionelDescription"),
    },
    jeanne: {
      profilePic: jeanneProfile,
      backgroundImage: jeanne,
      title: t("testimonials.jeanneTitle"),
      subtitle: t("testimonials.jeanneSubtitle"),
      link: "https://www.instagram.com/jeanne_lhx/",
      description: t("testimonials.jeanneDescription"),
    },
    dennis: {
      profilePic: dennisProfile,
      backgroundImage: dennis,
      title: t("testimonials.dennisTitle"),
      subtitle: t("testimonials.dennisSubtitle"),
      link: "https://www.linkedin.com/in/dennis-nazare-088bb0ba/",
      description: t("testimonials.dennisDescription"),
    },
    mira: {
      profilePic: miraProfile,
      backgroundImage: mira,
      title: t("testimonials.miraTitle"),
      subtitle: t("testimonials.miraSubtitle"),
      link: "https://www.instagram.com/mirasaadallah/",
      description: t("testimonials.miraDescription"),
    },
    marie: {
      profilePic: marieProfile,
      backgroundImage: marie,
      title: t("testimonials.marieTitle"),
      subtitle: "",
      description: t("testimonials.marieDescription"),
    },
  };

  return (
    <div>
      <NavigationMenu />
      <div className="container">
        <div className="columns mt-6 pt-6 is-vcentered">
          <div className="column mt-6">
            <h1 className=" px-5 py-5 zona">
              <span className="highlight">{t("cover.tagBold")}</span>{" "}
              {t("cover.tagline")}
            </h1>
            <p className="px-5 py-2" style={{ lineHeight: 1.5 }}>
              {t("cover.description")}
            </p>
            <CTA
              type={"link"}
              label={t("cover.cta")}
              destination={"/books"}
              style={{
                style: "button bg-purple is-medium is-rounded mx-5 my-6 cta",
              }}
            />
          </div>
          <div className="column">
            <img src={coverPic} alt="Home cover"></img>
          </div>
        </div>
        <div className="level has-centered-text is-mobile py-6">
          <div className="level-item level-right">
            <div className="zona animation">{t("cover.lvqmLife")}</div>
          </div>
          <div className="level-item level-left mx-2">
            <TypoAnimation style={{ style: "zona purple animation" }} />
          </div>
        </div>
        <div className="level px-5 mt-6">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1">{t("cards.title")}</h2>
          </div>
        </div>
        <div className="level mx-5">
          <div className="level-item">
            <h3 className="py-2 is-size-6">{t("cards.subTitle")}</h3>
          </div>
        </div>
        <div className="columns mt-6 mx-3">
          {Object.keys(cards1).map((card) => (
            <div className="column" key={card}>
              <div className="card card-item">
                <div className="card-content">
                  <h3 className="is-size-3 my-5 has-text-centered">
                    {cards1[card].emoji}
                  </h3>
                  <div className="content has-text-centered is-size-5 zona mt-5 purple">
                    {cards1[card].title}
                  </div>
                  <p className="has-text-centered">
                    {cards1[card].description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="columns  mt-6 mx-3">
          {Object.keys(cards2).map((card) => (
            <div className="column" key={card}>
              <div className="card card-item">
                <div className="card-content">
                  <h3 className="is-size-3 my-5 has-text-centered">
                    {cards2[card].emoji}
                  </h3>
                  <div className="content has-text-centered is-size-5 zona mt-5 purple">
                    {cards2[card].title}
                  </div>
                  <p className="has-text-centered">
                    {cards2[card].description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="level px-5 mt-6">
          <div className="level-item has-text-centered level-is-shrinkable">
            <CTA
              type={"link"}
              label={t("footer.cta")}
              destination={"/books"}
              style={{
                style: "button bg-purple is-medium is-rounded mx-5 my-3 cta",
              }}
            />
          </div>
        </div>
        <div className="level px-5 mt-6 py-6">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1">
              {t("pros.titleMain")}{" "}
              <span className="highlight">{t("pros.titleBold")}</span>
            </h2>
          </div>
        </div>
        <div className="columns mt-5 mb-6 pb-3">
          {Object.keys(lists).map((list) => (
            <div className="column" key={list}>
              <p
                className={
                  list === "pros"
                    ? "home px-5 py-3 has-text-right has-text-weight-semibold is-size-4 purple"
                    : "home px-5 py-3 has-text-left has-text-weight-light is-size-4"
                }
              >
                {lists[list].first}
              </p>
              <p
                className={
                  list === "pros"
                    ? "home px-5 py-3 has-text-right has-text-weight-semibold is-size-4 purple"
                    : "home px-5 py-3 has-text-left has-text-weight-light is-size-4"
                }
              >
                {lists[list].second}
              </p>
              <p
                className={
                  list === "pros"
                    ? "home px-5 py-3 has-text-right has-text-weight-semibold is-size-4 purple"
                    : "home px-5 py-3 has-text-left has-text-weight-light is-size-4"
                }
              >
                {lists[list].third}
              </p>
              <p
                className={
                  list === "pros"
                    ? "home px-5 py-3 has-text-right has-text-weight-semibold is-size-4 purple"
                    : "home px-5 py-3 has-text-left has-text-weight-light is-size-4"
                }
              >
                {lists[list].fourth}
              </p>
              <p
                className={
                  list === "pros"
                    ? "home px-5 py-3 has-text-right has-text-weight-semibold is-size-4 purple"
                    : "home px-5 py-3 has-text-left has-text-weight-light is-size-4"
                }
              >
                {lists[list].fifth}
              </p>
              <p
                className={
                  list === "pros"
                    ? "home px-5 py-3 has-text-right has-text-weight-semibold is-size-4 purple"
                    : "home px-5 py-3 has-text-left has-text-weight-light is-size-4"
                }
              >
                {lists[list].sixth}
              </p>
            </div>
          ))}
        </div>
        <div className="columns py-6 my-6">
          <div className="column faq-container">
            <h2 className=" px-5 py-3 zona is-size-2">{t("faq.how")}</h2>
            <Accordion preExpanded={["a"]}>
              {Object.keys(faqs).map((faq) => (
                <AccordionItem uuid={faqs[faq].uuid} key={faq}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="mb-2">
                      <a href="#0">
                        <div className="box maxBox">
                          <nav className="level">
                            <div className="level-left">
                              <div className="level-item">
                                <h3 className="zona is-size-6">
                                  {faqs[faq].title}
                                </h3>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <h3 className="zona is-size-6">
                                  {faqs[faq].emoji}
                                </h3>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </a>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-4 py-2">
                    <p className="desc" style={{ lineHeight: 1.5 }}>
                      {faqs[faq].text}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="column faq-container pt-6">
            <img src={paperBack} alt="faq cover"></img>
          </div>
        </div>
        <div className="level px-5 mt-6">
          <div className="level-item has-text-centered level-is-shrinkable">
            <CTA
              type={"link"}
              label={t("footer.cta")}
              destination={"/books"}
              style={{
                style: "button bg-purple is-medium is-rounded mx-5 my-3 cta",
              }}
            />
          </div>
        </div>
        <div className="level py-6 mt-6 px-5">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1">
              {t("testimonials.start")}{" "}
              <span className="highlight">{t("testimonials.bold")}</span>
            </h2>
          </div>
        </div>
        <div className="box has-background-white has-text-grey-dark">
          <Carousel
            additionalTransfrom={0}
            arrows
            shouldResetAutoplay={false}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
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
            {Object.keys(testimonials).map((testimonial) => (
              <div className="card mx-3" key={testimonial}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={testimonials[testimonial].backgroundImage}
                      alt="Placeholder "
                    ></img>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48 ">
                        <img
                          className="is-rounded"
                          src={testimonials[testimonial].profilePic}
                          alt="Placeholder "
                        ></img>
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-5">
                        {testimonials[testimonial].title}
                      </p>
                      <p className="subtitle is-6">
                        <a href={testimonials[testimonial].link}>
                          {testimonials[testimonial].subtitle}
                        </a>
                      </p>
                    </div>
                  </div>
                  <section className="card-section message is-link">
                    <p
                      className="content testimonial-desc message-body"
                      style={{ lineHeight: 1.5 }}
                    >
                      {testimonials[testimonial].description}
                    </p>
                  </section>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
