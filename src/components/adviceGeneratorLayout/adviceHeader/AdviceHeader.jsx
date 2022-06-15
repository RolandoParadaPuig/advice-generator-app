import React, { useEffect } from "react";
import "./adviceHeader.css";
export const AdviceHeader = (props) => {
  const adviceNumber = props.adviceNumber;
  const advice = props.advice;
  useEffect(() => {}, []);
  return (
    <header>
      <h1 className={"advice--header-title"}>
        ADVICE {advice !== "" ? `#${adviceNumber}` : null}
      </h1>
    </header>
  );
};
