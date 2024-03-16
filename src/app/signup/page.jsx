"use client";
import React, { useState } from "react";
import "./signup.css";
import Link from "next/link";
import { toast } from "react-toastify";
import Spinner from "@/components/shared/Spinner";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false);

  const onSignup = async (e) => {
    e.preventDefault();

    try {
      if (
        user.username === "" ||
        user.email === "" ||
        user.password === "" ||
        user.password2 === ""
      ) {
        toast.error("You must fill in all required fields");
      } else if (
        user.password !== user.password2 &&
        user.username !== "" &&
        user.email !== "" &&
        user.password !== "" &&
        user.password2 !== ""
      ) {
        toast.error("Passwords don't match! Please try again!");
      } else {
        setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        console.log(response);
        toast.success("User has been successfully created!");
        // Check the data in console log
        console.log(user);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Signup failed!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <form onSubmit={onSignup}>
        <div className="spinner">{loading ? <Spinner /> : null}</div>
        <h2 className="text-[20px]">Signup Form</h2>
        <input
          type="text"
          placeholder="Username e.g. johndoe"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email e.g. johndoe@gmail.com"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your password ..."
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm your password ..."
          value={user.password2}
          onChange={(e) => setUser({ ...user, password2: e.target.value })}
        />
        <button type="submit">Signup</button>
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
