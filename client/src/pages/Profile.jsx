import { toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";

export default function Profile() {
  const { user, logout } = useUserContext();

  const notifyInfo = (text) => toast.info(text);

  const handleLogout = () => {
    logout(false);

    notifyInfo(`A bientôt ${user.username}`);
  };

  return (
    <div className="flex justify-center mt-40">
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-60 p-4 m-4 rounded-lg shadow-lg border-2 border-gray-200 w-72">
        <div className="w-full text-center text-xl font-bold mb-4">
          You're connected
        </div>
        <div className="w-full text-center mb-4">{user.email}</div>
        <div className="w-full text-center mb-4">{user.username}</div>
        <button
          type="button"
          onClick={handleLogout}
          className="w-full bg-black text-primary text-xl py-2 px-4 rounded-md"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
}
