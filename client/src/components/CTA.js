import React from "react";
import { Link } from "react-router-dom";

const CTA = (props) => {
  if (props.type === "link") {
    return (
      <button className={props.style.style}>
        <Link to={props.destination} className="zona" state={props.state}>
          <span className="ctaLabel">{props.label}</span>
        </Link>
      </button>
    );
  } else {
    return (
      <button className={props.style.style} onClick={props.onClick}>
        <a href="#0">
          <span className="ctaLabel zona">{props.label}</span>
        </a>
      </button>
    );
  }
};

export default CTA;
