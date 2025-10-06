import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl text-center font-semibold">
          Register Your Account
        </h1>

        <div className="card-body">
          <form className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />

            <div className="flex gap-2 items-center">
              <input type="checkbox" defaultChecked className="checkbox" />

              <p>Accept Term & Conditions</p>
            </div>

            <button className="btn btn-neutral mt-4">Register</button>

            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className={"text-red-500"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
