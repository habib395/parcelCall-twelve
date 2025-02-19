import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaRocketchat } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa"; // Import the sun and moon icons
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode); // Save theme in localStorage
      if (newMode) {
        document.body.classList.add("dark"); // Add dark class to body
      } else {
        document.body.classList.remove("dark"); // Remove dark class from body
      }
      return newMode;
    });
  };

  return (
    <div className="navbar sm:fixed bg-opacity-30 text-white bg-black z-50">
      <div className="w-11/12 mx-auto navbar">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost sm:text-xl">
            <FaRocketchat className="sm:text-5xl text-yellow-500 font-extrabold" />
            ParcelCall
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/" className="text-sm text-white px-2">
            Home
          </Link>
        </div>
        <div className="flex-none text-black">
          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="btn btn-ghost sm:text-xl text-white px-3"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" /> // Sun icon for light mode
            ) : (
              <FaMoon className="text-gray-500" /> // Moon icon for dark mode
            )}
          </button>
          {user?.email ? (
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>
                      UserName:
                      <p className="text-blue-400">{user?.displayName}</p>
                    </a>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={logOut} className="btn btn-sm">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login" className="text-sm text-white px-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
