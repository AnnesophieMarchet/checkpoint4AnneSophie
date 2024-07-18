import { toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";

export default function Profile() {
  const { user, logout } = useUserContext();

  // console.log(user.username);
  const notifyInfo = (text) => toast.info(text);

  const handleLogout = () => {
    logout(false);

    notifyInfo(`A bientôt ${user.username}`);
  };

  return (
    <div className=" flex flex-col  mx-auto max-w-sm  mt-52 ">
      <div className="flex flex-col  mx-auto max-w-sm ">You're connected</div>
      <div className="flex flex-col  mx-auto max-w-sm ">{user.username}</div>
      <button
        type="button"
        onClick={handleLogout}
        // className="flex justify-center mx-auto"
        className=" w-full bg-black text-primary text-xl py-2 px-4 rounded-md"
      >
        Disconnect
      </button>
    </div>
  );
}
