import { useEffect, useState } from "react"
import AddUser from "./components/User/AddUser"
import ListUser from "./components/User/ListUser"

function App() {

  const [userListData, setUserListData] = useState([])
  const [editData, setEditData] = useState(null)
  const [deleteData, setDeleteData] = useState(null)

  useEffect(() => {
    const LocalData = JSON.parse(localStorage.getItem('userData'))
    setUserListData(LocalData)
  }, [])

  return (
    <>
      <AddUser userListData={userListData} setUserListData={setUserListData} editData={editData} setEditData={setEditData} />
      <ListUser userListData={userListData} setEditData={setEditData} setUserListData={setUserListData} setDeleteData={setDeleteData} />
    </>
  )
}

export default App
