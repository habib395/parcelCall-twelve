import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { saveUser } from "../../api/utils";
import Lottie from "lottie-react";
import loginLottie from "../../../assets/lottie/login.json";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace={true} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    try {
      await signIn(email.value, password.value);
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle();
      await saveUser(data?.user);
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Login Form */}
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Log In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="*******"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
          >
            {loading ? <TbFidgetSpinner className="animate-spin mx-auto" /> : "Continue"}
          </button>
        </form>

        <div className="text-center mt-2">
          <button className="text-xs text-gray-500 dark:text-gray-400 hover:underline">Forgot password?</button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
          <p className="px-3 text-gray-500 dark:text-gray-400 text-sm">OR</p>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <FcGoogle size={24} />
          <span className="ml-2">Continue with Google</span>
        </button>

        {/* Register Redirect */}
        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>

      {/* Lottie Animation */}
      <div className="w-80">
        <Lottie animationData={loginLottie} loop={true} />
      </div>
    </div>
  );
};

export default Login;
