import { Chat, Detail, List } from "./components"
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

function App() {
    const user = true;
  return (
    <div className="container">
      {user ? (
        <>
           <List />
          <Chat />
          <Detail />
        </>
      ) : <Login />}
      <Notification />
    </div>
  )
}

export default App
 