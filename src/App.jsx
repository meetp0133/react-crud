import AddUser from "./components/User/AddUser"
import ListUser from "./components/User/ListUser"

function App() {

  return (
    <>
        <h1 className="text-center font-bold text-2xl underline black">User CRUD</h1>
        <AddUser/>
        <ListUser/>
    </>
  )
}

export default App
