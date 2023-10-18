import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function RegisterForm() {
  // Getting customized firebase functions from context
  const { loginUser, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents reload when submitted
    // Collecting form input data
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (email === user?.email) {
		Swal.fire({
			title: "User already logged in",
			icon: "warning",
			confirmButtonText: "Close",
		}).then(() => {
			navigate("/");
		})
		return;
    }

    // Loggin in firebase user
    loginUser(email, password)
      .then(() => {
		  Swal.fire({
			  title: "Successfully logged in",
			  icon: "success",
			  confirmButtonText: "Continue",
		  }).then(() => {
			navigate(location?.state || "/");
			setLoading(false);
		  })
      })
      .catch((err) => {
        // errorToast("Invalid email or password")
		  Swal.fire({
			  title: "Invalid email or password",
			  icon: "error",
			  confirmButtonText: "Close",
		  }).then(() => {
			  setLoading(false);
		  })
      }); // TODO: Errors to be manipulated later
  };

  // const handleGoogleSignIn = e => {
  //   e.preventDefault();
  //   googleSignInUser()
  //     .then(() => navigate(location?.state || "/"))
  //     .catch(err => console.error(err));
  // }

  return (
    <div>
      <div className="flex-shrink-0 w-full max-w-sm pb-5 mx-auto border-red-500 shadow-2xl font-montserrat card bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="mx-auto text-3xl font-semibold w-max font-playfair-display">
            Login
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="mt-6 form-control">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="mx-auto text-sm text-center md:text-base">
          <p>
            Don't have an account?{" "}
            <Link
              className="text-blue-600 underline hover:text-blue-500"
              to="/register"
            >
              Register
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
}
