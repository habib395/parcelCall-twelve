import { IoIosNotifications } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaRocketchat } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa"; // Import the sun and moon icons
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
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
      <div className="w-11/12 mx-auto navbar gap-5 flex items-center justify-between">
        <div className="flex">
          <Link to="/" className="btn btn-ghost sm:text-xl">
            <FaRocketchat className="sm:text-4xl text-yellow-500 font-extrabold" />
            ParcelCall
          </Link>
      </div>

      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
      
      <div className="flex sm:gap-8">
      <div className="flex items-center justify-between w-full z-50">
      <div className="hidden md:flex items-center gap-8">
        <a href="#Statistics" className="nav-link hover:text-yellow-400 transition-colors duration-300">
          STATISTICS
        </a>
        <a href="#Reviews" className="nav-link hover:text-yellow-400 transition-colors duration-300">
          REVIEWS
        </a>
        <a href="#about" className="nav-link hover:text-yellow-400 transition-colors duration-300">
          ABOUT US
        </a>
        <a href="#contact" className="nav-link hover:text-yellow-400 transition-colors duration-300">
          Contact Us
        </a>
      </div>

        {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-6 text-white md:hidden">
          <a href="#Statistics" className="nav-link hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            STATISTICS
          </a>
          <a href="#Reviews" className="nav-link hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            REVIEWS
          </a>
          <a href="#about" className="nav-link hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            ABOUT US
          </a>
        </div>
      )}
      </div>
      </div>

      <div className="flex text-black">
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
              <div className="dropdown dropdown-end z-50">
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
