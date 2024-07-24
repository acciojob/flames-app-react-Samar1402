import React, { Component, useState } from "react";
import "../styles/App.css";
// import { use } from "chai";
const msgArr = [
  "Siblings",
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
];
const removeMatchedChar = (str1, str2) => {
  let newStr1 = str1;
  let newStr2 = str2;
  for (let i = 0; i < str1.length; i++) {
    const ch1 = str1[i];
    const ch2 = str2[i];
    if (ch1 === undefined || ch2 === undefined) break;
    if (newStr1.includes(ch1) && newStr2.includes(ch2)) {
      newStr1 = newStr1.replace("");
      newStr2 = newStr2.replace("");
    }
  }
  return [newStr1, newStr2];
};
function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [message, setMessage] = useState("");

  function firstNameHandle(e) {
    setInput1(e.target.value);
  }

  function secondNameHandle(e) {
    setInput2(e.target.value);
  }

  function handleRelationship() {
    if (input1 === "" && input2 === "") {
      return setMessage("Please Enter name first");
    }
    let [str1, str2] = removeMatchedChar(input1, input2);
    const msgNumber = (str1.length + str2.length) % 6;
    setMessage(msgArr[msgNumber]);
  }

  function handleClear() {
    setInput1("");
    setInput2("");
    setMessage("");
  }

  return (
    <div id="main">
      <input
        type="text"
        placeholder="Enter first name"
        data-testid="input1"
        onChange={firstNameHandle}
      ></input>
      <input
        type="text"
        placeholder="Enter second name"
        data-testid="input2"
        onChange={secondNameHandle}
      ></input>
      <button data-testid="calculate_relationship" onClick={handleRelationship}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{message}</h3>
    </div>
  );
}

export default App;
