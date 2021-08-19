import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";



const App = () => {
  const [user_input_state, set_user_input_state] = useState([]);

  const user_input_handler = (user_input) => {
    set_user_input_state((pre_state) => [user_input, ...pre_state]);
    console.log(user_input_state.length);
  };

  return (
    <div>     
      <UserInput get_user_input={user_input_handler} />
      <UserList user_input_list={user_input_state} />
    </div>
  );
};

export default App;
