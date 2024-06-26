"use client";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import styles from "@/components/styles/Navbar.module.scss";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <h1>Logo</h1>
        <button onClick={() => console.log("menu button clicked")}>
          <MdOutlineMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
