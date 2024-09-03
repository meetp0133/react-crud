import React, { useEffect } from "react";
import "./ListUser.css";

function ListUser({ userListData, setEditData, setUserListData }) {

  const handleEdit = (user) => {       
    setEditData(user);

  };

  const handleDelete = (user) => {

    const updatedArr = userListData?.filter((item) => item.Id !== user.Id);

    setUserListData(updatedArr)
  };

  return (
    <>
      <div className="table-container max-w-4xl  mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
        <h1 className="text-center font-bold text-3xl text-gray-800 mb-6 underline">
          User List
        </h1>
        <table className="min-w-full bg-white">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Bio
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userListData?.length > 0 &&
              userListData?.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {user.bio}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <button
                      className="bg-blue-500 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:bg-blue-600 transition-colors duration-200 mr-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-200 focus:outline-none hover:bg-red-600 transition-colors duration-200"
                      onClick={() => handleDelete(user)}
                    >
                      Delete
                    </button>
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
