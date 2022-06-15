import React, { useEffect } from "react";
import "./adviceBody.css";
export const AdviceBody = (props) => {
  const advice = props.advice;
  useEffect(() => {}, [advice]);
  return (
    <main className={"advice--body"}>
      <p className={"advice--body-text"}>{advice}</p>
    </main>
  );
};
