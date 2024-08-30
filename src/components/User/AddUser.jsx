import React, { useState } from "react";
import "./AddUser.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();

  const addUserHandler = (e) => {
    e.preventDefault();
    const newUser = { name, email, bio };

    // Save user to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    dispatch(addUser(newUser));
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div className="m-4">
      <form onSubmit={addUserHandler}>
        <input
          type="text"
          className="shadow-sm border-gray-300 rounded-lg m-2 px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="shadow-sm border-gray-300 rounded-lg m-2 px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="shadow-sm border-gray-300 rounded-lg m-2 px-4 py-2 sfocus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="Enter bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white rounded-lg m-2 px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
