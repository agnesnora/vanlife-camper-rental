"use client";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import "@/components/styles/Navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <button onClick={() => console.log("menu button clicked")}>
          <MdOutlineMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
