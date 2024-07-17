import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;
export default function SignUpPage() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/api/users/registers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await response.json();
      console.info("Success:", data);
      navigate("/login-page");
      return data;
    } catch (err) {
      console.error("Fetch error:", err);
      return null;
    }
  };
  return (
    <div className=" flex flex-col  mx-auto max-w-sm  pt-5 ">
      <div className="flex justify-center mb-20 mt-36">
        <p className="font-custom text-2xl">Registration</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {/* <label htmlFor="username" className="block">
            Nom de famille
          </label> */}
          <input
            onChange={handleChange}
            value={register.username}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="w-full  px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          {/* <label htmlFor="email" className="block">
            Adresse mail
          </label> */}
          <input
            onChange={handleChange}
            value={register.email}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full  px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-20">
          {/* <label htmlFor="password" className="block">
            Mot de passe
          </label> */}
          <input
            onChange={handleChange}
            value={register.password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="  w-full px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className=" w-full bg-black  text-primary text-xl py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
