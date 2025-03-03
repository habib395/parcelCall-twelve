import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { imageUpload, saveUser } from "../../api/utils";
import Lottie from "lottie-react";
import registerLottie from "../../../assets/lottie/register.json";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    const photoURL = await imageUpload(image);

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      await saveUser({ ...result?.user, name, photoURL, phone });
      navigate("/");
      toast.success("Registration Successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle();
      await saveUser(data?.user);
      navigate("/");
      toast.success("Registration Successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
      {/* Form Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <div className="w-full">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-700">Register</h1>
            <p className="text-gray-500 text-sm">Create your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone Number"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Profile Picture</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                required
                className="w-full file:bg-yellow-500 file:text-white file:border-0 file:px-3 file:py-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition text-sm"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin mx-auto" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="flex items-center my-3">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400 text-xs">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Sign-In */}
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full border py-2 rounded-md hover:bg-gray-200 transition text-sm"
          >
            <FcGoogle size={20} className="mr-2" /> Continue with Google
          </button>

          <p className="text-center text-gray-500 text-xs mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <Lottie
          animationData={registerLottie}
          loop={true}
          className="max-w-sm sm:max-w-md lg:max-w-lg w-full"
        />
      </div>
    </div>
  );
};

export default Register;
