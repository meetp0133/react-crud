import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./AddUser.css";
import { v4 as uuidv4 } from 'uuid';


function AddUser({ userListData, setUserListData, editData, setEditData }) {

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  const addUserHandler = (data) => {
    if (editData) {
      const FilterData = userListData?.filter(item => item.Id !== editData?.Id)
      setUserListData([data, ...FilterData])
    } else {
      data.Id = uuidv4()
      setUserListData(userListData ? [...userListData, data] : [data])
      setEditData(null)
    }
    reset()
  };

  useEffect(() => {
    if (userListData?.length > 0) {
      localStorage.setItem('userData', JSON.stringify(userListData))
    }
  }, [userListData])

  useEffect(() => {
    if (editData) {
      setValue('name', editData?.name)
      setValue('email', editData?.email)
      setValue('bio', editData?.bio)
    }
  }, [editData])

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(addUserHandler)}>
        <input
          type="text"
          className="shadow-sm border-gray-300 rounded-lg m-2 px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="Enter name..."
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          type="email"
          className="shadow-sm border-gray-300 rounded-lg m-2 px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="Enter email..."
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="text"
          className="shadow-sm border-gray-300 rounded-lg m-2 px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
          placeholder="Enter bio..."
          {...register("bio")}
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
