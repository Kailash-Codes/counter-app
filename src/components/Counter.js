import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./count.css";
import "./buttons.css";
const Counter = () => {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <p className="counter">{count}</p>
      <div className="button-div">
        <Button className="button" size="lg" onClick={() => setCounter(count + 1)}>
          click to increase
        </Button>
        <Button className="button" size="lg" onClick={() => setCounter(count - 1)}>
          click to decrease
        </Button>
      </div>
    </div>
  );
};

export default Counter;
