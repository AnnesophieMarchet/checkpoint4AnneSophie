import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export default function NavBar() {
  const [user] = useState(false);

  return (
    <nav className="bg-red-500">
      <div>
        <img src={Logo} alt="logo" />
      </div>

      {user ? (
        <div>
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="/game-result">
            <button type="button">Game</button>
          </Link>
          <Link to="/profile">
            <button type="button">Profile</button>
          </Link>
        </div>
      ) : (
        <>
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="/sign-up-page">
            <button type="button">SignUp</button>
          </Link>
          <Link to="/login-page">
            <button type="button">Connexion</button>
          </Link>
        </>
      )}
    </nav>
  );
}
