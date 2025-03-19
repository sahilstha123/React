import React from "react";
export const List = ({item}) => {
  return (
    <div className="list">
      {item.map((item, index) => (
            <li key={index} >
              {item}
            </li>
          ))}
      </div>
  );
};
