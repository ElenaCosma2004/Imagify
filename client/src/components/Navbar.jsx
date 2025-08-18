import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState(true); //if true-> the user is logged in
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-full py-4 px-4 sm:px-10">
      {/* Left side: Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      {/* Right side: Pricing + Login */}

      <div>
        <button>
          <img className="w-5" src={assets.credit_star} alt="" />
          <p>Credits left: 100</p>
        </button>
        <p>Hi, Eli</p>
      </div>

      {!user && (
        <div className="flex items-center gap-4">
          <p onClick={() => navigate("/buy")} className="cursor-pointer">
            Pricing
          </p>
          <button className="px-4 py-2 text-sm rounded-full bg-black text-white">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
