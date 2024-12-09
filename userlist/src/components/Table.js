import React from "react";
import { FemaleAvatar, MaleAvatar } from "./Avatar";

export const Table = ({ userList }) => {
  return (
    <div className=" mt-5 shadow rounded">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{user.gender ==="male" ? <MaleAvatar/> :<FemaleAvatar/>}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
