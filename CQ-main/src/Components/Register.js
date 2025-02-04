import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    role: " ",
    name: " ",
    email: " ",
    uid: " ",
    username: " ",
    pass: " ",
  });

  const changeEventHander = (event) => {
    // console.log(event.target.value);
    setFormData(() => ({
      ...formData,
      [event.target.role]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.uid]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.username]: event.target.value,
      [event.target.pass]: event.target.value,
    }));
    // console.log(formData.uid);
  };

  var sendData = (e) => {
    e.preventDefault();
    // console.log(formData);

    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status == 200) {
        alert("User registered sucessfully");
        navigate("/login");
      } else {
        alert("User already Exits !!");
      }
    });
  };

  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Campus Quell - Register
            </h1>
            <p className="text-white mt-1">
              A platform tailored to address your issues and concerns.
            </p>
            <Link to="/login">
              <button
                type="submit"
                className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
              >
                Login
              </button>
            </Link>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form onSubmit={sendData} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Please Register to Continue...
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome to Campus Quell 
            </p>

            <div className="flex items-center border-2  my-4 rounded-2xl">
              <select
                onChange={changeEventHander}
                class="form-select py-2  px-3 rounded-pill"
                name="role"
                required
              >
                <option selected>Select your Role</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={changeEventHander}
                className="pl-2 outline-none border-none"
                type="text"
                name="name"
                id=""
                placeholder="Full name"
                required
              />
            </div>

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
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                onChange={changeEventHander}
                className="pl-2 outline-none border-none"
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
                required
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <input
                onChange={changeEventHander}
                className="pl-2 outline-none border-none"
                type="text"
                name="uid"
                id="uid"
                placeholder="Enter your UID"
                required
              />
            </div>

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
                onChange={changeEventHander}
                className="pl-2 outline-none border-none"
                type="text"
                name="username"
                placeholder="Username"
                required
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
                onChange={changeEventHander}
                className="pl-2 outline-none border-none"
                type="password"
                name="pass"
                placeholder="Set Password"
                required
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Register
            </button>
            <Link to="/login">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                Already registed ? click here to login
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
