import React from "react";
import "./ErrorMsg.css";

const ErrorMsg = (props) => {
    const click_handler = (event) => {
        console.log("clicked")
        props.get_click();
    }

  return (
    <div className="backdrop">
      <div className="error_msg">
        <header>
          <h2> {props.title} </h2>
        </header>
        <div className="middle-box">
          <p> {props.msg} </p>
        </div>
        <footer>
          <button type="submit" onClick={click_handler}> Okay </button>
        </footer>
      </div>
    </div>
  );
};
export default ErrorMsg;
