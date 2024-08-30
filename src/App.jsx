import { useEffect, useState } from "react"
import AddUser from "./components/User/AddUser"
import ListUser from "./components/User/ListUser"

function App() {

  const [userListData, setUserListData] = useState([])
  const [editData, setEditData] = useState(null)
  console.log('editData', editData)

  useEffect(() => {
    const LocalData = JSON.parse(localStorage.getItem('userData'))
    setUserListData(LocalData)
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl underline black">User CRUD</h1>
      <AddUser userListData={userListData} setUserListData={setUserListData} editData={editData} setEditData={setEditData} />
      <ListUser userListData={userListData} setEditData={setEditData} />
    </>
  )
}

export default App
