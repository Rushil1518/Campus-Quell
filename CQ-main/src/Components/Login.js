import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    // const usrdata = {
    //   uname: username,
    //   pass: pass,
    // };

    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname: username, pass: pass }),
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert("Welcome Student !!");
          window.sessionStorage.setItem("username", username);
          navigate("/student");
        } else if (res.status == 201) {
          alert("Welcome Admin");
          window.sessionStorage.setItem("username", username);
          navigate("/admin");
        } else if (res.status == 202) {
          alert("Welcome Resolver");
          window.sessionStorage.setItem("username", username);
          navigate("/resolver");
        } else {
          alert("Invalid Username or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });


  }

  return (
    <div>
      
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Campus Quell - LOGIN
            </h1>
            <p className="text-white mt-1">
            A platform tailored to address your issues and concerns.
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form onSubmit={onSubmit} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Please Login to Continue
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome to Campus Quell
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Username"
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                className="pl-2 outline-none border-none"
                type="password"
                name="pass"
                id=""
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <a href="/register">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                Not registed ? Click here to register
              </span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
