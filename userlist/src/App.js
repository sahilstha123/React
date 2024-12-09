import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { UserForm } from "./components/UserForm";

function App() {
  const [userList, setUserList] = useState([]);
  const addUser = (UserObj) => {
    setUserList([...userList, UserObj]);
  };
  console.log(userList);

  return (
    <div className="container">
      <h2 className="text-center pb-2 pt-2">UserList</h2>
      <hr />
      <UserForm addUser={addUser} />
      <Table userList={userList} />
    </div>
  );
}

export default App;
