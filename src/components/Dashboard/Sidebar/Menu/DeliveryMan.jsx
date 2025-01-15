import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdReviews } from "react-icons/md";
import MenuItem from './MenuItem';
const DeliveryMan = () => {
    return (
        <>
        <MenuItem
          icon={BsFillHouseAddFill}
          label='My Delivery List'
          address='my-delivery'
        />
        <MenuItem icon={MdReviews} label='My Reviews' address='my-review' />
      </>
    );
};

export default DeliveryMan;