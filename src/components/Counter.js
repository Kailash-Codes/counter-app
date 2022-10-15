import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./count.css";
import "./buttons.css";
const Counter = () => {
  const [count, setCounter] = useState(0);
  const random = Math.floor(Math.random() * 9 + 1);
  function randomColor() {
    if (random === 1) {
      document.querySelector("p").style.color = "red";
    }
    if (random === 2) {
      document.querySelector("p").style.color = "blue";
    }
    if (random === 3) {
      document.querySelector("p").style.color = "green";
    }
    if (random === 4) {
      document.querySelector("p").style.color = "yellow";
    }
    if (random === 5) {
      document.querySelector("p").style.color = "tomato";
    }
    if (random === 6) {
      document.querySelector("p").style.color = "black";
    }
    if (random === 7) {
      document.querySelector("p").style.color = "pink";
    }
    if (random === 8) {
      document.querySelector("p").style.color = "aqua";
    }
    if (random === 9) {
      document.querySelector("p").style.color = "brown";
    }
    if (random === 10) {
      document.querySelector("p").style.color = "gray";
    }
  }
  const increaseCounter = () => {
    setCounter(count + 1);
    randomColor();
  };
  const decreaseCounter = () => {
    setCounter(count - 1);
    randomColor();
  };
  return (
    <div>
      <p className="counter">{count}</p>
      <div className="button-div">
        <Button className="button" size="lg" onClick={increaseCounter}>
          click to increase
        </Button>
        <Button className="button" size="lg" onClick={decreaseCounter}>
          click to decrease
        </Button>
      </div>
    </div>
  );
};

export default Counter;
