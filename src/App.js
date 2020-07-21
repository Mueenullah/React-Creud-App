import React, { useState } from "react";
import UserTable from "./components/table/UserTable";
import AddUserForm from "./components/adduserform/AddUserForm";
import EditUserForm from "./components/edituserform/EditUserForm";
import "./App.css";

function App() {
  const UserData = [
    { id: 1, name: "testUser1", username: "testUser123" },
    { id: 2, name: "testUser2", username: "testUser456" },
    { id: 3, name: "testUser3", username: "testUser678" },
  ];
  const [users, setUsers] = useState(UserData);
  const [editing, setEditing] = useState(false);
  const intaialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(intaialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add Users</h2>
            {editing ? (
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            ) : (
              <AddUserForm addUser={addUser} />
            )}
          </div>
          <div className="flex-large">
            <h2>All users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
