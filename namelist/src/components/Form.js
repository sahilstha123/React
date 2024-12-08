import React, { useState } from "react";
import { Display } from "./Display";
const [name, setName] = useStatete("");
const handleOnchange = (e) => {
  const { value } = e.target;
  setName(value);
};

const handleOnsubmit = (e) => {
  e.preventDefault();
  // setList([...list, name]);
  console.log(list)
};
export const Form = () => {
  return (
    <div className="form">
      <Display />
      <form action="" onSubmit={handleOnsubmit}>
        <input type="text" onChange={handleOnchange} />
        <button className="btn btn-danger mx-2">Add User</button>
      </form>
    </div>
  );
};
