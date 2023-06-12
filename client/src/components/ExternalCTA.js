import React from "react";

const ExternalCTA = (props) => {
    if (props.type === "link") {
        return (
          <button className={props.style.style}>
             <a href={props.destination}>
              <span className="ctaLabel zona">{props.label}</span>
            </a>
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

export default ExternalCTA;
