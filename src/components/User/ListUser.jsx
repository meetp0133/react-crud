import React from "react";
import "./ListUser.css"

function ListUser({ userListData, setEditData }) {
  console.log('userListData', userListData)

  const handleEdit = (user) => {
    // console.log('edit', user, index)
    setEditData(user)
  }

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
            {userListData?.length > 0 && userListData?.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.bio}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListUser;


