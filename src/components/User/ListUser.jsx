import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ListUser.css"

function ListUser() {
    let [users, setUserList] = useState([]);

    const { userListData } = useSelector(state => state.user)
    console.log('userListData',userListData);
    // const dispatch = useDispatch()

    // // Function to load users from localStorage
    const loadUsers = () => {
      users = JSON.parse(localStorage.getItem("users")) || [];
      setUserList(users);
    };
  
    // Load users when the component mounts
    useEffect(() => {
      loadUsers();
    }, []);

  return (
    <>
      <div className="table-container">
      <table>
        <caption>
          <h1 className="text-center font-bold text-2xl underline black">User List</h1>
        </caption>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ListUser;


