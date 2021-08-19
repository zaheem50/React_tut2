import React  from "react";
import "./UserList.css"
var list_jsx = [];

const UserList = (props) => {
    console.log("props.user_input_list.length:" + props.user_input_list.length);
    return (
      <div className="userlist">
        <ul>
          <div>
              {props.user_input_list.map(ui => (
              <li>
                {ui["name"]} ( {ui["age"]} years of age)
              </li>
          ))}
          </div>
        </ul>
      </div>
    );
}
export default UserList;
