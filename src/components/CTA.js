import React from "react";
import { Link } from "react-router-dom";

const CTA = (props) => {
    return (
      <button className={props.style}>
        <Link to={props.destination} className="zona" state={props.state}>
          <span>{props.label}</span>
        </Link>
      </button>
    )
};

export default CTA;
