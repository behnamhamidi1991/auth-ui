import Link from "next/link";
import React from "react";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <form>
        <h2 className="text-[20px]">Login Form</h2>
        <input type="email" placeholder="Email e.g. johndoe@gmail.com" />
        <input type="password" placeholder="Enter your password ..." />
        <button>Login</button>
        <div>
          If you don&#39;t have an acoount,{" "}
          <Link href="/signup" className="navigationBtn">
            signup here ...
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
