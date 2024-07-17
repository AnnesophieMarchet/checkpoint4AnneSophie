import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";

export default function LoginPage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifyFail = (text) => toast.error(text);
  const notifySuccess = (text) => toast.success(text);
  const navigate = useNavigate();
  const [errors] = useState(null);
  const { login } = useUserContext();
  // console.log(login);
  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/api/users/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfos),
        credentials: "include",
      });
      if (response.status === 200) {
        const user = await response.json();
        login(user.user);
        navigate("/game-result");
        notifySuccess(`Bienvenue ${user.user.username}`);
      } else {
        // Log des détails de la réponse en cas d'éche
        console.info(response);
        notifyFail("Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="pt-5">
      <div className=" flex flex-col  mx-auto max-w-sm   ">
        <div className="flex justify-center mb-20 mt-36">
          <p className="font-custom text-2xl">Connection</p>
        </div>
        <form method="post" onSubmit={handleSubmit} className="min-w-96">
          <div className="mb-4">
            <input
              aria-required="true"
              type="email"
              id="email"
              name="email"
              value={loginInfos.email}
              onChange={(e) =>
                setLoginInfos({ ...loginInfos, email: e.target.value })
              }
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md font-custom focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
            />
          </div>
          <div className="mb-20">
            <input
              autoComplete="new-password"
              aria-required="true"
              type="password"
              id="password"
              name="password"
              value={loginInfos.password}
              onChange={(e) =>
                setLoginInfos({ ...loginInfos, password: e.target.value })
              }
              placeholder="Password"
              className="w-full px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
            />
          </div>
          {errors && <div className="mb-4 text-red-600">{errors}</div>}
          <button
            type="submit"
            className=" w-full bg-black text-primary text-xl py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
        <p className="flex justify-end font-custom pr-2  text-gray-500">
          Pas encore de compte ?&nbsp;
          <Link to="/sign-up-page" className="underline text-primary">
            M'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}
