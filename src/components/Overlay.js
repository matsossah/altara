import React, { forwardRef } from "react"
import Footer from "./Footer";
import CTA from "./CTA.js"
import { useTranslation } from "react-i18next";


const Overlay = forwardRef(({ caption, scroll }, ref) => {
  const { t } = useTranslation();
  return (
  <>
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = (scroll.current * 100).toFixed(0)
    }}
    className="scroll">
    <div style={{ height: "420vh" }}>
      <div className="dot">
        <h1 >Day 1</h1>
        Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
        <CTA
        type={"link"}
        label={t("cover.day1cta")}
        destination={"/day1"}
        style="button is-normal is-rounded is-light is-link my-6 "
      />
      </div>

    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Day 2</h1>
        Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Day 3</h1>A rocket (from Italian: rocchetto, lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft or other vehicle use to obtain thrust from a
        rocket engine.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Day 4</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary mechanical device that extracts energy
        from a fluid flow and converts it into useful work.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Day 5</h1>A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things.[1][2]
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Day 6</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.
      </div>
    </div>
    <div style={{ height: "250vh" }}>
      <div className="dot">
        <h1>Day 7</h1>A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn]) who pioneered rigid
        airship development at the beginning of the 20th century.
      </div>
    </div>
    <div className="caption" style={{ display: "inline-block" }}>
      <span ref={caption}>
        0
      </span>
      <span>
        %
      </span>
    </div>
    <Footer/>
  </div>
        </>
  )
  
})

export default Overlay
