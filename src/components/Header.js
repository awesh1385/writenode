import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import { signInWithPopup,  signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useState } from "react";

export const Header = () => {
  const [ isAuth ,setIsAuth] = useState( JSON.parse(localStorage.getItem("isAuth"))||false);

  function handleLogin() {
    signInWithPopup(auth, provider).then((result)=>{
      console.log(result)
      setIsAuth(true);
      localStorage.setItem("isAuth",true)
    })
  }
  function handleLogOut(){
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth",false);
  }

  return (
    <header className="flex">
      <Link to="/" className="logo flex">
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav flex">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogOut} className="auth flex">
              <BiLogOut className="btnicon" />
              Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth flex">
            <FcGoogle className="btnIcon" />
            Login
          </button>
        )}
      </nav>
    </header>
  );
};
