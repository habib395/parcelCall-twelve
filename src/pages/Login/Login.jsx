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

  // Form submit handler
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

  // Handle Google Sign-in
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
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen px-4">
      {/* Login Form */}
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Log In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="*******"
              className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-300"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
          >
            {loading ? <TbFidgetSpinner className="animate-spin mx-auto" /> : "Continue"}
          </button>
        </form>

        <div className="text-center mt-2">
          <button className="text-xs text-gray-500 hover:underline">Forgot password?</button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-gray-500 text-sm">OR</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={24} />
          <span className="ml-2">Continue with Google</span>
        </button>

        {/* Register Redirect */}
        <p className="text-center text-sm mt-4 text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-500 hover:underline">
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
