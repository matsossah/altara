import React, { useState } from "react";
import i18n from "i18next";
import NavigationMenu from "../components/NavigationMenu";
import { useTranslation } from "react-i18next";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import mateoCoach from "../img/mateoCoach.png";
import mayaCoach from "../img/mayaCoach.png";
import lvqmLogo from "../img/lvqmLogo.png";

const Coaching = () => {
  const { t } = useTranslation();
  var language = i18n.language;
  const [trustImpact, setTrustImpact] = useState(false);
  const [forgiveImpact, setForgiveImpact] = useState(false);
  const [careerImpact, setCareerImpact] = useState(false);
  const [passionImpact, setPassionImpact] = useState(false);
  const [loveImpact, setLoveImpact] = useState(false);
  const [healthImpact, setHealthImpact] = useState(false);
  const [goalImpact, setGoalImpact] = useState(false);
  const [sportImpact, setSportImpact] = useState(false);
  const [coachChoice, setCoachChoice] = useState("mateo");
  const [formulaChoice, setFormulaChoice] = useState("regular");

  const impacts = {
    row1: {
      trust: { name: t("impacts.trust"), style: trustImpact },
      forgive: { name: t("impacts.forgive"), style: forgiveImpact },
      career: { name: t("impacts.career"), style: careerImpact },
    },
    row2: {
      passion: { name: t("impacts.passion"), style: passionImpact },
      love: { name: t("impacts.love"), style: loveImpact },
    },
    row3: {
      health: { name: t("impacts.health"), style: healthImpact },
      goal: { name: t("impacts.goal"), style: goalImpact },
      sport: { name: t("impacts.sport"), style: sportImpact },
    },
  };

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

  const coaches = {
    mateo: {
      name: "Mateo 🇫🇷 🇺🇸 🇩🇪",
      picture: mateoCoach,
      rating: t("impacts.mateoRating"),
      description: t("impacts.mateoDescription"),
    },
    maya: {
      name: "Maya 🇫🇷 🇺🇸",
      picture: mayaCoach,
      rating: t("impacts.mayaRating"),
      description: t("impacts.mayaDescription"),
    },
  };

  const impactPressed = (impact) => {
    if (impact === "trust") {
      setTrustImpact(!trustImpact);
    } else if (impact === "forgive") {
      setForgiveImpact(!forgiveImpact);
    } else if (impact === "career") {
      setCareerImpact(!careerImpact);
    } else if (impact === "passion") {
      setPassionImpact(!passionImpact);
    } else if (impact === "love") {
      setLoveImpact(!loveImpact);
    } else if (impact === "health") {
      setHealthImpact(!healthImpact);
    } else if (impact === "goal") {
      setGoalImpact(!goalImpact);
    } else if (impact === "sport") {
      setSportImpact(!sportImpact);
    }
  };

  const coachSelected = (coach) => {
    if (coach === "mateo") {
      setCoachChoice("mateo");
    } else if (coach === "maya") {
      setCoachChoice("maya");
    }
  };

  const formulaSelected = (formula) => {
    if (formula === "starter") {
      setFormulaChoice("starter");
    } else if (formula === "regular") {
      setFormulaChoice("regular");
    } else if (formula === "premium") {
      setFormulaChoice("premium");
    }
  };

  const content = {
    videos: {
      en: "https://www.youtube.com/embed/DFLz3nh-NKM",
      fr: "https://www.youtube.com/embed/oeU8yyXSeCo",
    },
  };

  const timelineSteps = {
    first: {
      number: "1",
      emoji: t("coaching.timeline.firstEmoji"),
      title: t("coaching.timeline.firstTitle"),
      description: t("coaching.timeline.firstDescription"),
    },
    second: {
      number: "2",
      emoji: t("coaching.timeline.secondEmoji"),
      title: t("coaching.timeline.secondTitle"),
      description: t("coaching.timeline.secondDescription"),
    },
    third: {
      number: "3",
      emoji: t("coaching.timeline.thirdEmoji"),
      title: t("coaching.timeline.thirdTitle"),
      description: t("coaching.timeline.thirdDescription"),
    },
    fourth: {
      number: "4",
      emoji: t("coaching.timeline.fourthEmoji"),
      title: t("coaching.timeline.fourthTitle"),
      description: t("coaching.timeline.fourthDescription"),
    },
  };

  return (
    <div>
      <NavigationMenu />
      <div className="container">
        <div className="columns mt-6 py-6 is-vcentered">
          <div className="column my-6">
            <h1 className=" px-5 py-5 zona">
              <span>{t("coaching.lvqm")}</span>{" "}
              <span className="highlight">{t("coaching.coaching")}</span>
            </h1>
            <p className="px-5 py-2" style={{ lineHeight: 1.5 }}>
              {t("coaching.description")}
            </p>
            <CTA
              label={t("coaching.tryout")}
              destination={""}
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
          <div className="column my-6">
            <figure className="image is-16by9">
              <iframe
                title="motivational video"
                className="has-ratio"
                width="640"
                height="360"
                src={content["videos"][language]}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </figure>
          </div>
        </div>
        <section className="section is-small bg-purple mb-6 py-6">
          <div className="level px-5">
            <div className="level-item has-text-centered level-is-shrinkable">
              <h2 className="zona animation mb-6 white">
                {t("coaching.timeline.title")}
              </h2>
            </div>
          </div>
          <progress className="progress is-small mt-5 is-primary" max="100" />
          <div className="columns mt-3 pt-6">
            {Object.keys(timelineSteps).map((step) => (
              <div className="column mb-3" key={step}>
                <p className="mb-3 ml-1 has-text-weight-semibold white">
                  {timelineSteps[step]["number"]}
                </p>
                <p className="mb-2 has-text-weight-semibold white">
                  {timelineSteps[step]["emoji"]} {timelineSteps[step]["title"]}
                </p>
                <p
                  className="ame= py-2 is-size-6 pr-6 white"
                  style={{ lineHeight: 1.5 }}
                >
                  {timelineSteps[step]["description"]}
                </p>
              </div>
            ))}
          </div>
          <article className="message is-primary">
            <div className="message-header ">
              <p>🎉 {t("coaching.motivationTitle")}</p>
            </div>
            <div className="message-body zona" style={{ lineHeight: 1.5 }}>
              {t("coaching.motivationText")}
            </div>
          </article>
        </section>
        <div id="hero" className="mb-6 pb-6" />
        <div className="level px-5 mb-6 pb-6 ">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1">
              {t("impacts.impact1")}
              <span className="purple">{t("impacts.impact2")}</span>
            </h2>
          </div>
        </div>
        {Object.keys(impacts).map((row) => (
          <div className="columns mb-5 has-text-centered" key={row}>
            <div className="column">
              {Object.keys(impacts[row]).map((item) => (
                <button
                  className={
                    impacts[row][item]["style"]
                      ? "button is-rounded is-medium is-light mx-2 mt-3 is-primary"
                      : "button is-rounded is-medium is-light mx-2 mt-3"
                  }
                  style={{ width: 250 }}
                  onClick={() => impactPressed(item)}
                  key={item}
                >
                  <h2 className={"zona is-size-6"}>
                    <span className="purple">{impacts[row][item]["name"]}</span>
                  </h2>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="level px-5 py-6 my-6">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1">
              {t("coaches.title1")}
              <span className="purple">{t("coaches.title2")}</span>
            </h2>
          </div>
        </div>
        {Object.keys(coaches).map((coach) => (
          <div
            className={
              coachChoice === coach
                ? "box mt-6 mx-6 px-3 is-clickable coachCardSelected"
                : "box mt-6 mx-6 px-3 is-clickable coachCard"
            }
            key={coach}
            onClick={() => coachSelected(coach)}
          >
            <div className="columns py-3 ">
              <div className="column is-4 has-text-centered">
                <div className="has-text-centered">
                  <figure className="image is-inline-block mb-3 coachImage">
                    <img
                      className="is-rounded "
                      alt="coach profile"
                      src={coaches[coach]["picture"]}
                    ></img>
                  </figure>
                </div>
                <p className="zona has-text-centered mb-2">
                  {coaches[coach]["name"]}
                </p>
                <p className="has-text-centered has-text-primary">
                  {coaches[coach]["rating"]}
                </p>
              </div>
              <div className="column">
                <div className="px-4 has-text-left mt-4">
                  <p style={{ color: "#4a4a4a", lineHeight: 1.5 }}>
                    {coaches[coach]["description"]}
                  </p>
                  <div className="priceTag my-6">
                    <span className="zona ctaLabel is-vcentered">
                      {t("impacts.priceTag")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="level px-5 py-6 my-6">
          <div className="level-item has-text-centered level-is-shrinkable">
            <h2 className="zona is-size-1">
              {t("formulas.title1")}
              <span className="purple">{t("formulas.title2")}</span>
            </h2>
          </div>
        </div>
        <div className="columns is-centered is-gapless">
          {Object.keys(formulas).map((formula) => (
            <div
              className={
                formulaChoice === formula
                  ? "box coachCardSelected mx-4 is-clickable"
                  : "box coachCard mx-4 is-clickable"
              }
              key={formula}
              style={{ height: 520, width: 395 }}
              onClick={() => formulaSelected(formula)}
            >
              <div className="column">
                <div className="level is-mobile">
                  <div className="level-left ">
                    <figure className="image is-32x32 mr-3">
                      <img src={lvqmLogo} alt="LVQM logo "></img>
                    </figure>
                    <p className="zona is-size-4">
                      {formulas[formula]["title"]}
                    </p>
                  </div>
                </div>

                <p
                  className="mb-5 is-size-6 zona purple"
                  style={{ color: "C4C4C4" }}
                >
                  {formulas[formula]["subtitle"]}
                </p>
                <p className="mt-4 mb-6 is-size-1 zona">
                  {formulas[formula]["price"]} €
                </p>
                <p className="my-4 is-size-6">{formulas[formula]["ebook"]}</p>
                <p className="my-4 is-size-6">{formulas[formula]["group"]}</p>
                <p className="my-4 is-size-6">{formulas[formula]["study"]}</p>
                <p className="my-4 is-size-6">{formulas[formula]["plan"]}</p>
                {formulas[formula]["coaching"] !== "" && (
                  <p className="my-4 is-size-6">
                    {formulas[formula]["coaching"]}
                  </p>
                )}
                {formulas[formula]["coaching"] !== "" && (
                  <p className="my-4 is-size-6">
                    {formulas[formula]["goodies"]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="level px-5 mt-6">
          <div className="level-item has-text-centered level-is-shrinkable">
            <CTA
              type={"link"}
              label={t("coaching.cta")}
              destination="/checkout"
              state={{
                type: "coaching",
                language: language,
                coachChoice: coachChoice,
                formulaChoice: formulaChoice,
                cartTotal: formulas[formulaChoice]["price"],
                impacts: {
                  trust: trustImpact,
                  forgive: forgiveImpact,
                  career: careerImpact,
                  passion: passionImpact,
                  love: loveImpact,
                  health: healthImpact,
                  goal: goalImpact,
                  sport: sportImpact,
                },
              }}
              style={{
                style: "button bg-purple is-medium is-rounded mx-5 my-3 cta",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coaching;
