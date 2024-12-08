import React from "react";
const list = []
export const List = () => {
  return (
    <div className="list ">
      <ul>
        {list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
