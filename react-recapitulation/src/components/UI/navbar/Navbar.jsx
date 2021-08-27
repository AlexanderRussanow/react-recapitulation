import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import MyButton from "../buttons/MyButton";

const Navbar = () => {
  const { setIsAuth } = React.useContext(AuthContext);
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <div className="navbar_links">
        <MyButton>
          <Link to="/about">About</Link>
        </MyButton>
        <MyButton>
          <Link to="/posts">Posts</Link>
        </MyButton>
      </div>
      <MyButton onClick={logOut}>Log out</MyButton>
    </div>
  );
};

export default Navbar;
