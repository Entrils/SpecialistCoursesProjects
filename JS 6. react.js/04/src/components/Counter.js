import React from "react";
import "./css/Counter.css";

import Button from "./Button";

const Counter = ({ value, uid }) => {
  return (
    <div className="Counter">
      <div className="Counter_into">
        <Button
          value="-"
          onClickHandler={() => {
            alert("-" + uid);
          }}
        />
        <input
          className="Counter_input"
          defaultValue={value}
          onChange={(ev) => {
            console.log(ev.target.value);
          }}
        />
        <Button
          value="+"
          onClickHandler={() => {
            alert("+" + uid);
          }}
        />
      </div>
    </div>
  );
};

export default Counter;
