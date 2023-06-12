import React from "react";
import { history } from "../History.js";

const CTA = (props) => {
    return (
      <button className={props.style.bulma} state={props.state} onClick={() => history.push(props.destination)}>
          <span className="zona">{props.label}</span>
      </button>
    )
};

export default CTA;
