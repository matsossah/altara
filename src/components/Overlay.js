import React, { forwardRef } from "react";
import Footer from "./Footer";
import CTA from "./CTA.js";
import { useTranslation } from "react-i18next";

const Overlay = forwardRef(({ caption, scroll }, ref) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        ref={ref}
        onScroll={(e) => {
          scroll.current =
            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
          caption.current.innerText = (scroll.current * 100).toFixed(0);
        }}
        className="scroll"
      >
        <div style={{ height: "420vh" }}>
          <div className="dot">
            <h1>Day 1</h1>
            <h3>
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </h3>
            <CTA
              label={t("cover.day1cta")}
              destination={"/day1"}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />
          </div>
        </div>
        <div style={{ height: "200vh" }}>
          <div className="dot">
            <h1>Day 2</h1>
            <h3>
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </h3>
            <CTA
              label={t("cover.day1cta")}
              destination={"/day1"}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />
          </div>
        </div>
        <div style={{ height: "200vh" }}>
          <div className="dot">
            <h1>Day 3</h1>
            <h3>
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </h3>
            <CTA
              label={t("cover.day1cta")}
              destination={"/day1"}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />
          </div>
        </div>
        <div style={{ height: "200vh" }}>
          <div className="dot">
            <h1>Day 4</h1>
            <h3>
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </h3>
            <CTA
              label={t("cover.day1cta")}
              destination={"/day1"}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />
          </div>
        </div>
        <div style={{ height: "200vh" }}>
          <div className="dot">
            <h1>Day 5</h1>
            <h3>
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </h3>
            <CTA
              label={t("cover.day1cta")}
              destination={"/day1"}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />
          </div>
        </div>
        <div style={{ height: "200vh" }}>
          <div className="dot">
            <h1>Day 6</h1>
            <h3>
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </h3>
            <CTA
              label={t("cover.day1cta")}
              destination={"/day1"}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />{" "}
          </div>
        </div>
        <div style={{ height: "250vh" }}>
          <div className="dot">
            <h1>Day 7</h1>
            <h3>
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </h3>
            <CTA
              label={t("cover.day1cta")}
              destination={"/day1"}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />
          </div>
        </div>
        <div className="caption" style={{ display: "inline-block" }}>
          <span ref={caption}>0</span>
          <span>%</span>
        </div>
        <Footer />
      </div>
    </>
  );
});

export default Overlay;
