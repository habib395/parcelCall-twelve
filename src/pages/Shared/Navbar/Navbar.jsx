import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth()
  console.log(user)
  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
      <div className="w-11/12 mx-auto navbar">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
        </div>
        <div className="flex-none text-black">
            <Link to="/" className="text-sm text-white px-2">Home</Link>
          <div className="text-white text-xl">
            <IoIosNotifications />
          </div>
          {
            user?.email ? (
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
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                <button
                  onClick={logOut}
                  className="btn btn-sm bg-blue-400"
                >
                  Logout
                </button>
                </li>
              </ul>
            </div>
            </div>
            ):(
              <Link to="/login" className="text-sm text-white px-2">Login</Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
