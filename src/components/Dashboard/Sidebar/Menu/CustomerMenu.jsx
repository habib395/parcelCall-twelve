import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";;
import MenuItem from './MenuItem';
import { MdOutlineBorderColor } from "react-icons/md";

const CustomerMenu = () => {
    const { user } = useAuth()
    const [ isOpen, setIsOpen] = useState(false)

    // const closeModal = () => {
    //     setIsOpen(false)
    //   }
    return (
        <>
        <MenuItem icon={CgProfile} label='My Profile' address='my-profile' />
        <MenuItem icon={BsCashCoin} label='Book a Parcel' address='book-parcel' />
        <MenuItem icon={MdOutlineBorderColor} label='My Parcels' address='my-order' />
  
        {/* <button
          onClick={() => setIsOpen(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
        >
          <GrUserAdmin className='w-5 h-5' />
  
          <span className='mx-4 font-medium'>Become A Seller</span>
        </button> */}
  
        {/* <BecomeSellerModal
          requestHandler={requestHandler}
          closeModal={closeModal}
          isOpen={isOpen}
        /> */}
      </>
    );
};

export default CustomerMenu;