import React from "react";
import TypeAnimation from "react-type-animation";
import { useTranslation } from "react-i18next";

const TypoAnimation = (props) => {
  const { t } = useTranslation();

  return (
    <TypeAnimation
      cursor={false}
      sequence={[
        t("cover.lvqmI"),
        1000,
        t("cover.lvqmYou"),
        1000,
        t("cover.lvqmShe"),
        1000,
        t("cover.lvqmHe"),
        1000,
      ]}
      className={props.style["style"]}
      repeat={Infinity}
    />
  );
};

export default TypoAnimation;
