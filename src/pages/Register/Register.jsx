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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-500">
      {/* Form Section */}
      <div className="w-full md:w-1/2 max-w-lg p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Register</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone Number"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Profile Picture</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="w-full file:bg-blue-500 file:text-white file:border-0 file:px-3 file:py-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="*******"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition text-sm"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin mx-auto" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          <span className="mx-2 text-gray-500 dark:text-gray-400 text-xs">or</span>
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        </div>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm"
        >
          <FcGoogle size={20} className="mr-2" /> Continue with Google
        </button>

        <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
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