import React from "react";
import "./adviceHeader.css";
export const AdviceHeader = (props) => {
  const adviceNumber = props.adviceNumber;
  const advice = props.advice;
  return (
    <header>
      <h1 className={"advice--header-title"}>
        ADVICE {advice !== "" ? `#${adviceNumber}` : ""}
      </h1>
    </header>
  );
};
