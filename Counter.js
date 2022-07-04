// import React from "react";
import "./Counter.css";
import React, { useState } from "react";

const Counter = () => {
  const [Count, SetCount] = useState(0);

  return (
    <>
      <div className="Counter">
        <h1>Counter</h1>
        <h1>{Count}</h1>
        <div>
          <button className="Increase" onClick={() => SetCount(Count + 1)}>
            Increase
          </button>
          <button className="Decrease" onClick={() => SetCount(Count - 1)}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
