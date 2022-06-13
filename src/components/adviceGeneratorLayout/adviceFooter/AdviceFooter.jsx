import React from "react";
import "./adviceFooter.css";
export const AdviceFooter = (props) => {
  const setAdvice = props.setAdvice;
  const setAdviceNumber = props.setAdviceNumber;
  const randomClick = async () => {
    try {
      setAdvice("");
      const url = "https://api.adviceslip.com/advice";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.slip.id);
      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
      setAdviceNumber(data.slip.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <footer className={"advice--footer"}>
      <div className={"advice--footer-separator"}></div>
      <button onClick={randomClick} className={"advice--footer-button"}>
        <div className={"advice--footer-dice"} />
      </button>
    </footer>
  );
};
