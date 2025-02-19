import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const UserDataRow = ({ userData, refetch }) => {
  const { _id, role, name, email, phone, parcelsDelivered, totalSpentAmount } = userData || {};
  const axiosSecure = useAxiosSecure();

  const updateRole = async (newRole, currentRole) => {
    if (currentRole === newRole) {
      toast.error(`Already ${newRole}`);
      return;
    }
    try {
      const { data } = await axiosSecure.patch(`/user/role/${email}`, { role: newRole });
      toast.success(`${newRole} role updated successfully`);
      refetch();
    } catch (err) {
      toast.error('Failed to update role');
    }
  };

  return (
    <tr className="dark:bg-gray-800 dark:border-gray-700">
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm">
        <p className="text-gray-900 dark:text-white whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm">
        <p className="text-gray-900 dark:text-white whitespace-no-wrap">{phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm">
        <p className="text-gray-900 dark:text-white whitespace-no-wrap">{parcelsDelivered || "N/A"}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm">
        <p className="text-gray-900 dark:text-white whitespace-no-wrap">{totalSpentAmount || "N/A"}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm">
        <div className="sm:flex items-center justify-center gap-2 text-gray-900 dark:text-white m-2 whitespace-no-wrap">
          <button
            onClick={() => updateRole('deliveryMan', role)}
            className="btn btn-sm"
            disabled={role === 'deliveryMan'}
          >
            Make Delivery Man
          </button>
          <button
            onClick={() => updateRole('admin', role)}
            className="btn btn-sm"
            disabled={role === 'admin'}
          >
            Make Admin
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserDataRow;
