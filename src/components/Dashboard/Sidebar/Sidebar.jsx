import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import logo from '../../../../assets/logo.png'
import CustomerMenu from "./Menu/CustomerMenu";
import MenuItem from "./Menu/MenuItem";
import { FcSettings } from 'react-icons/fc'
import DeliveryMan from "./Menu/DeliveryMan";
import AdminMenu from "./Menu/AdminMenu";
import useRole from "../../../hooks/useRole";


const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [role, isLoading] = useRole()

  const handleToggle = () =>{
    setActive(!isActive)
  }

  return (
    <>
    {/* Small Screen Navbar */}
    <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
      <div>
        <div className='block cursor-pointer p-4 font-bold'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              width='100'
              height='100'
            />
          </Link>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
      >
        <AiOutlineBars className='h-5 w-5' />
      </button>
    </div>

    {/* Sidebar */}
    <div
      className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
        isActive && '-translate-x-full'
      }  md:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        <div>
          <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-300 mx-auto'>
            <Link to='/'>
              <img
                src={logo}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        {/* Nav Items */}
        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav>
            {
              role === 'customer' && <CustomerMenu></CustomerMenu>
            }
            {
              role ==='deliveryMan' && <DeliveryMan></DeliveryMan>
            }
            {
              role === 'admin' && <AdminMenu></AdminMenu>
            }
            
            
          </nav>
        </div>
      </div>

      <div>
        <hr />
        <button
          onClick={logOut}
          className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
        >
          <GrLogout className='w-5 h-5' />

          <span className='mx-4 font-medium'>Logout</span>
        </button>
      </div>
    </div>
  </>
  );
};

export default Sidebar;
