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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode); 
      if (newMode) {
        document.body.classList.add("dark"); 
      } else {
        document.body.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <div className="navbar sm:fixed bg-opacity-30 text-blue-500 dark:text-white dark:bg-black z-50 px-5">

      <button className="md:hidden text-white sm:text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      <div className="mx-auto navbar gap-5 flex items-center justify-between">
        <div className="flex">
          <Link to="/" className="btn btn-ghost sm:text-xl">
            <FaRocketchat className="text-5xl text-blue-600 font-extrabold" />
            ParcelCall
          </Link>
      </div>
      
      <div className="flex sm:gap-8">
      <div className="flex items-center justify-between w-full z-50">
      <div className="hidden md:flex items-center gap-8">
        <a href="#Feature" className="nav-link hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            OUR FEATURE
          </a>
        <a href="#Statistics" className="nav-link hover:text-blue-400 transition-colors duration-300">
           STATISTICS
        </a>
        <a href="#Reviews" className="nav-link hover:text-blue-400 transition-colors duration-300">
          REVIEWS
        </a>
        <a href="#about" className="nav-link hover:text-blue-400 transition-colors duration-300">
          ABOUT US
        </a>
        <a href="#contact" className="nav-link hover:text-blue-400 transition-colors duration-300">
          CONTACT US
        </a>
      </div>

        {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-6 text-white md:hidden">
          <a href="#Statistics" className="nav-link hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            STATISTICS
          </a>
          <a href="#Reviews" className="nav-link hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            REVIEWS
          </a>
          <a href="#about" className="nav-link hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
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
              <FaSun className="text-blue-500" /> 
            ) : (
              <FaMoon className="text-gray-500" /> 
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
                  className="menu menu-sm dropdown-content bg-white dark:bg-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
