"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./login.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Spinner from "@/components/shared/Spinner";
import axios from "axios";
import { useAuth } from "@/Context/authContext";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { setIsLoggedIn } = useAuth();

  useEffect(() => {}, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      if (user.email === "" || user.password === "") {
        toast.error("Please fill in all required fields!");
      } else {
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("Login Successful!", response.data);
        setIsLoggedIn(true);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!" + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <form onSubmit={onLogin}>
        <div className="spinner">{loading ? <Spinner /> : null}</div>
        <h2 className="text-[20px]">Login Form</h2>
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
        <button type="submit">Login</button>
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
