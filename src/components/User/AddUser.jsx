import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./AddUser.css";
import { v4 as uuidv4 } from "uuid";

function AddUser({ userListData, setUserListData, editData, setEditData }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const addUserHandler = (data) => {
    console.log("data", data);
    data.Id = uuidv4();
    if (editData) {
      const FilterData = userListData?.findIndex(
        (item) => item.Id === editData?.Id
      );
      if (FilterData !== -1) {
        userListData[FilterData].name = data.name;
        userListData[FilterData].email = data.email;
        userListData[FilterData].bio = data.bio;
      }

      console.log("userListData--------->", userListData);
      setUserListData([...userListData]);
    } else {
      setUserListData(userListData ? [...userListData, data] : [data]);
      setEditData(null);
    }
    reset();
  };

  useEffect(() => {
    if (userListData?.length > 0) {
      localStorage.setItem("userData", JSON.stringify(userListData));
    }
  }, [userListData]);

  useEffect(() => {
    if (editData) {
      setValue("name", editData?.name);
      setValue("email", editData?.email);
      setValue("bio", editData?.bio);
    }
  }, [editData]);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
    <h1 className="text-center font-bold text-3xl text-gray-800 mb-6">User CRUD</h1>
    <form onSubmit={handleSubmit(addUserHandler)} className="space-y-4">
      <div className="flex items-center space-x-4">
        {/* Name Input */}
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full shadow-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Enter name..."
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
  
        {/* Email Input */}
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full shadow-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Enter email..."
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>
  
      <div className="flex items-center space-x-4">
        {/* Bio Input */}
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            className="w-full shadow-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Enter bio..."
            {...register("bio")}
          ></textarea>
        </div>
  
        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-lg px-4 py-2 font-semibold focus:ring-2 focus:ring-indigo-200 focus:outline-none hover:bg-indigo-600 transition-colors duration-200"
          >
            Add User
          </button>
        </div>
      </div>
    </form>
  </div>
  
  );
}

export default AddUser;
