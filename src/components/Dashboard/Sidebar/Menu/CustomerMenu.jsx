import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";;
import MenuItem from './MenuItem';
import { MdOutlineBorderColor } from "react-icons/md";

const CustomerMenu = () => {
    const { user } = useAuth()
    const [ isOpen, setIsOpen] = useState(false)

    return (
        <>
        <MenuItem icon={CgProfile} label='My Profile' address='my-profile' />
        <MenuItem icon={BsCashCoin} label='Book a Parcel' address='book-parcel' />
        <MenuItem icon={MdOutlineBorderColor} label='My Parcels' address='my-order' />
      </>
    );
};

export default CustomerMenu;