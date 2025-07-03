import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="up">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={input} readOnly />
        </form>
      </div>
      <div className="down">
        <div className="line">
          <input
            type="button"
            value="AC"
            className="sign"
            onClick={() => setInput("")}
          />
          <input
            type="button"
            value="DEL"
            className="sign"
            onClick={() => setInput(input.slice(0, -1))}
          />
          <input
            type="button"
            value="%"
            className="sign"
            onClick={(e) => setInput(input + e.target.value)}
          />
          <input
            type="button"
            value="+"
            className="sign"
            onClick={(e) => setInput(input + e.target.value)}
          />
        </div>
        <div className="line">
          <input
            type="button"
            value="7"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="8"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="9"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="-"
            className="sign"
            onClick={(e) => setInput(input + e.target.value)}
          />
        </div>
        <div className="line">
          <input
            type="button"
            value="4"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="5"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="6"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="*"
            className="sign"
            onClick={(e) => setInput(input + e.target.value)}
          />
        </div>
        <div className="line">
          <input
            type="button"
            value="3"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="2"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="1"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="/"
            className="sign"
            onClick={(e) => setInput(input + e.target.value)}
          />
        </div>
        <div className="line">
          <input
            type="button"
            value="0"
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="."
            onClick={(e) => setInput(input + e.target.value)}
            className="number"
          />
          <input
            type="button"
            value="="
            className="equal"
            onClick={handleEqual}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
