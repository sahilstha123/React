import React, { useState } from "react";

export const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user)
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <>
      <div className="wrapper w-50 mt-5 m-auto shadow ">
        <div className="form p-4">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="row g-2">
              <div className="col-md-3">
                <select
                  id="inputState"
                  className="form-select"
                  name="gender"
                  onChange={handleOnchange}
                  defaultValue={""}
                >
                  <option selected value="">
                    Choose...
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>

                </select>
              </div>
              <div className="col-md-6">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  onChange={handleOnchange}
                />
              </div>
              <div className="col-md-3 d-grid">
                <button className="btn btn-primary">Add user </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
