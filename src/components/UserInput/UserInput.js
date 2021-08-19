import React, { useState } from "react";
import "./UserInput.css";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

const UserInput = (props) => {
  const [user_name_state, set_user_name_state] = useState("");
  const [user_age_state, set_user_age_state] = useState("");
  const [error_state, set_error_state] = useState(false);

  const changeTextHandler = (event) => {
    // console.log("Text:" + event.target.value)
    set_user_name_state(event.target.value);
  };

  const changeNumberHandler = (event) => {
    // console.log("Number:"+ event.target.value);
    set_user_age_state(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("button clicked!!");
    if (user_name_state.length == 0) {
      set_error_state(true);
      return;
    } else {
      var temp_user_input = {
        key: Math.random().toString(),
        name: user_name_state,
        age: user_age_state,
      };
      props.get_user_input(temp_user_input);
    }
    set_user_name_state("");
    set_user_age_state("");
  };
  const get_error_click = () => {
    set_error_state(false);
  }

  return (
    <div>
      {error_state && <ErrorMsg title="Wrong input" msg="Something is wrong" get_click={get_error_click}/>}
      <form onSubmit={submitHandler}>
        <div className="userinput">
          <label>Name</label>
          <input
            type="text"
            value={user_name_state}
            onChange={changeTextHandler}
          />
          <label>Age</label>
          <input
            type="number"
            value={Number(user_age_state)}
            onChange={changeNumberHandler}
            min="0"
            max="200"
          />
          <input type="submit" text="Add User" />
        </div>
      </form>
    </div>
  );
};
export default UserInput;
