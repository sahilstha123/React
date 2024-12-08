import React, { useState } from "react";
import { Display } from "./Display";
export const Form = ({addUser}) => {
  const [name, setName] = useState("");
  const handleOnchange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  
  const handleOnsubmit = (e) => {
    e.preventDefault();
    addUser(name)
    
    // console.log(list)
  };
  return (
    <div className="form">
      <Display name={name}/>
      <form action="" onSubmit={handleOnsubmit}>
        <input type="text" onChange={handleOnchange} />
        <button className="btn btn-danger mx-2">Add User</button>
      </form>
    </div>
  );
};
