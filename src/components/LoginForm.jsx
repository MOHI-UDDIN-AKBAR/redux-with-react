import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
const LoginForm = () => {
  const dispatch = useDispatch();
  const student = useSelector((store) => store.auth.student);
  //   const [person, setPerson] = useState({
  //     name: "",
  //     email: "",
  //   });
  const name = (e) => {
    dispatch(authActions.name(e.target.value));
  };
  const email = (e) => {
    dispatch(authActions.email(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(person);
    // if (person) {
    //   setPerson({
    //     name: "",
    //     email: "",
    //   });
    // }
    console.table(student);
    dispatch(authActions.login());
  };

  return (
    <>
      <div className="loginForm">
        <form>
          <div className="name">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              title="name"
              placeholder=""
              //   value={person.name}
              value={student.name}
              //   onChange={(e) => {
              //     setPerson({ ...person, name: e.target.value });
              //   }}
              onChange={name}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              title="email"
              id="email"
              //   value={person.email}
              value={student.email}
              //   onChange={(e) => {
              //     setPerson({ ...person, email: e.target.value });
              //   }}

              onChange={email}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
