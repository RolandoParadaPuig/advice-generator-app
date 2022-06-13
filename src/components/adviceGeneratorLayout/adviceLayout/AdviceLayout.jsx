import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { AdviceBody } from "../adviceBody/AdviceBody";
import { AdviceFooter } from "../adviceFooter/AdviceFooter";
import { AdviceHeader } from "../adviceHeader/AdviceHeader";
import "./adviceLayout.css";
export const AdviceLayout = () => {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(0);
  (async () => {
    try {
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
  })();
  return (
    <div className={"advice--layout"}>
      <div className="advice--layout-body">
        <AdviceHeader adviceNumber={adviceNumber} advice={advice} />
        {advice !== "" ? (
          <AdviceBody advice={advice} />
        ) : (
          <AiOutlineLoading className={"advice--layout-loading"} />
        )}
        <AdviceFooter setAdvice={setAdvice} setAdviceNumber={setAdviceNumber} />
      </div>
    </div>
  );
};
