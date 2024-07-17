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
    <>
      <div>Je suis connecté</div>
      <div>{user.username}</div>
      <button
        type="button"
        onClick={handleLogout}
        className="flex justify-center mx-auto"
      >
        Se déconnecter
      </button>
    </>
  );
}
