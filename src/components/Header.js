import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { logout } from "firebase.js";

function Header() {
  return (
    <header className="    border-b border-gray-300 bg-white">
      <div className="container mx-auto flex h-[60px] items-center justify-between">
        <Link to="/">
          <img
            className=" h-[29px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="logo"
          />
        </Link>
        <Search />
        <nav>
          <button onClick={logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
