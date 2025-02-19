import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import logo from '../../../../assets/logo.png'
import { FaRocketchat } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user)
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
