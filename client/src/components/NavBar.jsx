import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { useUserContext } from "../context/UserContext";

export default function NavBar() {
  const { user } = useUserContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 440);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`bg-black p-4  ${isMobile ? "fixed bottom-0 left-0 right-0 flex justify-evenly" : "flex items-center justify-between static top-0 left-0 right-0"}`}
    >
      <div className="hidden md:block">
        <img src={Logo} alt="logo" className="h-20" />
      </div>

      <div className="flex items-center gap-12 mr-7">
        <Link to="/" className="text-white text-xl">
          Home
        </Link>
        {user ? (
          <>
            <Link to="/game-result" className="text-white text-xl">
              Game
            </Link>
            <Link to="/profile" className="text-white text-xl">
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link to="/sign-up-page" className="text-white text-xl">
              SignUp
            </Link>
            <Link to="/login-page" className="text-white text-xl">
              Connexion
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
