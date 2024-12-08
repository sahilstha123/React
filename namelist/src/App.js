import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  
  const [list, setList] = useState([]);
  
  return (
    <>
      <div
        className="wrapper d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
        }}
      >
        <div className="userList card p-3 shadow">
         <Form />
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
