import React, {useState} from "react";
import "./UserInput.css"

const UserInput = props => {
  const [userName,setUserName] = useState('');
  const [userAge,setUserAge] = useState('');

  const changeTextHandler = (event) => {
    console.log("Text:" + event.target.value)
    setUserName(event.target.value)
  }
  const changeNumberHandler = (event) => {
  console.log("Number:"+ event.target.value);
    setUserAge(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();    
    console.log("button clicked!!")
    props.uinput({userName,userAge})
  }
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="userinput">
            <label>Name</label>
            <input type="text" onChange={changeTextHandler} />
            <label>Age</label>
            <input
              type="number"
              onChange={changeNumberHandler}
              min="0"
              max="200"
            />
            <input type="submit" text="Add User" />
          </div>
        </form>
      </div>
    );
}
export default UserInput;