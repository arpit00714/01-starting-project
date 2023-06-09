import React, { useState, useRef } from "react";

import Card from "../UI/Card";

import Button from "../UI/Button";

import classes from "./AddUser.module.css";

import UsersList from "./UsersList";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrappers";

const AddUser = (props) => {
  const nameInputRef = useRef(); // last video
  const ageInputRef = useRef(); //  ''
  const collegeNameRef = useRef(); // last video

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameRef.current.value;
    //if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalide input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    // if (+enteredAge < 1) {
    if (+enteredUserAge < 1) {
      // + becoz it is a number not string
      setError({
        title: "Invalide Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // props.onAddUser(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
    nameInputRef.current.value = ""; // last video
    ageInputRef.current.value = "";
    collegeNameRef.current.value = ""; // last video
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classesName={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="college-name">College</label>
          <input id="college-name" 
          type="text" 
          ref={collegeNameRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
