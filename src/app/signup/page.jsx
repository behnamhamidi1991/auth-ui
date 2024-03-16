import Link from "next/link";
import React from "react";
import "./signup.css";

const SignupPage = () => {
  return (
    <div className="loginPage">
      <form>
        <h2 className="text-[20px]">Signup Form</h2>
        <input type="text" placeholder="Username e.g. johndoe" />
        <input type="email" placeholder="Email e.g. johndoe@gmail.com" />
        <input type="password" placeholder="Enter your password ..." />
        <input type="password" placeholder="Confirm your password ..." />
        <button>Signup</button>
        <div>
          If you don&#39;t have an acoount,{" "}
          <Link href="/login" className="navigationBtn">
            signup here ...
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
