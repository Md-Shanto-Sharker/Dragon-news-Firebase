import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const { createUser ,setUser} = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        setUser(result)
        console.log(result);
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl text-center font-semibold">
          Register Your Account
        </h1>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your email address"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your password"
              required
            />

            <div className="flex gap-2 items-center">
              <input type="checkbox" defaultChecked className="checkbox" />

              <p>Accept Term & Conditions</p>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className={"text-red-500"}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
