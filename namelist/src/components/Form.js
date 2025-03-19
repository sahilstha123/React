import React, { useState } from "react";
import { Display } from "./Display";
export const Form = ({addUser}) => {
    const [input, setInput] = useState("");
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      if (input.trim()) {
        //   setItems([...item,input]);
        addUser(input)
        setInput("");
      }
    };
    const handleOnchange = (e) => {
      setInput(e.target.value);
    };
  return (
    <div className="form" onSubmit={handleOnSubmit}>
      <Display name={input}/>
      <form action="" className="d-flex gap-2">
        <input
          type="text"
          className="form-control list-group-item text-dark rounded"
          placeholder="Enter text"
          onChange={handleOnchange}
          style={{
            outline: "none ",
            boxShadow: "none",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid red")}
          onBlur={(e) => (e.target.style.border = "1px solid gray")}
        />
        <button className="btn btn-danger">Submit</button>
      </form>
    </div>
  );
};
