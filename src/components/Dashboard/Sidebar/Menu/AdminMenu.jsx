import { FaUsers } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdBookmarkAdded } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import MenuItem from './MenuItem';
const AdminMenu = () => {
    return (
        <>
        <MenuItem icon={MdBookmarkAdded} label='All Parcels' address='all-parcel' />
        <MenuItem icon={FaUsers} label='All Users' address='all-user' />
        <MenuItem icon={TbTruckDelivery} label='All Delivery Men' address='all-deliveryMan' />
        <MenuItem icon={FcStatistics} label='Statistics' address='statistic' />
      </>
    );
};

export default AdminMenu;