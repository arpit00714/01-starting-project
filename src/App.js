import React, { useState, Fragment } from "react";

import AddUser from "./components/AddUser/AddUser";

import UsersList from "./components/AddUser/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollegeName) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, college: uCollegeName, id: Math.random().toString() },
      ];
    });
  };
  
  return (
   // <div>
   //<React.Fragment>
   // user Fragment in useState then use like this ->
    <Fragment>                              
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
   </Fragment> 
   //</div>
  );
}

export default App;
