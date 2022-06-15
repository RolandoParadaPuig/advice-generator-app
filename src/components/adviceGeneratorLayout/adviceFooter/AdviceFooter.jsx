import React, { useState, useEffect } from "react";
import "./adviceFooter.css";
export const AdviceFooter = (props) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const setAdvice = props.setAdvice;
  const setAdviceNumber = props.setAdviceNumber;
  const advice = props.advice;
  const adviceNumber = props.adviceNumber;
  const randomClick = async () => {
    setBtnDisabled(true);
    setAdvice("");
    try {
      const url = "https://api.adviceslip.com/advice";
      const res = await fetch(url);
      const data = await res.json();
      if (adviceNumber == data.slip.id) {
        randomClick();
        console.log(data.slip.advice);
      } else {
        setAdvice(data.slip.advice);
        setAdviceNumber(data.slip.id);
        setBtnDisabled(false);
      }
    } catch (err) {
      console.log(err);
      setBtnDisabled(false);
    }
  };
  useEffect(() => {}, []);
  return (
    <footer className={"advice--footer"}>
      <div className={"advice--footer-separator"}></div>
      <button
        disabled={btnDisabled}
        onClick={randomClick}
        className={"advice--footer-button"}
      >
        generate
      </button>
    </footer>
  );
};
