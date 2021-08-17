import React , {useState } from 'react';
import UserInput from "./components/UserInput/UserInput"
import UserList from "./components/UserList/UserList"


function App() {
const [uInput,setUInput] = useState('');
const uInputHandler = (props) => {
  console.log(props)
  setUInput(props)
}

  return (
    <div>
      <UserInput uinput={uInputHandler} />
      <UserList />
    </div>
  );
}

export default App;
