import React from "react";
import "./header.css";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="userContainer">
        <Link href="/login" className="loginRegisterBtn">
          <FaUserAlt className="loginRegisterIcon" />
          <span>Login & Register</span>
        </Link>
      </div>

      <ul className="navLinks">
        <li>
          <Link href="/" className="navLink">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            About
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
