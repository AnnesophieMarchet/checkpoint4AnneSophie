import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import "./index.css";

function App() {
  return (
    <UserProvider>
      <main>
        <NavBar />
        <Outlet />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </UserProvider>
  );
}

export default App;
