import { FaUserCog } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import MenuItem from './MenuItem';
const AdminMenu = () => {
    return (
        <>
        <MenuItem icon={BsGraphUp} label='All Parcels' address='all-parcel' />
        <MenuItem icon={FaUserCog} label='All Users' address='all-user' />
        <MenuItem icon={FaUserCog} label='All Delivery Men' address='all-deliveryMan' />
        <MenuItem icon={FaUserCog} label='Statistics' address='statistic' />
      </>
    );
};

export default AdminMenu;