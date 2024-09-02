import React from "react";
import "./ListUser.css";

function ListUser({ userListData, setEditData, setDeleteData }) {
  console.log("userListData", userListData);

  const handleEdit = (user) => {
    // console.log('edit', user, index)
    setEditData(user);
  };

  const handleDelete = (user) => {
    const index = userListData.findIndex((item) => item.Id == user.Id);
    if (index !== -1) {
      userListData.splice(index, 1);
    }
    setDeleteData(userListData);

    if (userListData?.length > 0) {
      localStorage.setItem("userData", JSON.stringify(userListData));
    }
  };

  return (
    <>
      <div className="table-container">
        <table>
          <caption>
            <h1 className="header text-center font-bold text-2xl underline black">
              User List
            </h1>
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
              <th>Action Button</th>
            </tr>
          </thead>
          <tbody>
            {userListData?.length > 0 &&
              userListData?.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.bio}</td>
                  <td>
                    <button
                      className="bg-indigo-500 text-white rounded-lg m-2 px-2 py-2 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button 
                      className="bg-indigo-500 text-white rounded-lg m-2 px-2 py-2 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                      onClick={() => handleDelete(user)}>Delete</button>
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
