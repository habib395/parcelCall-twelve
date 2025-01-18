import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const UserDataRow = ( {userData, refetch}) => {
    const { _id, role, name, email } = userData || {}
    const [selected, setSelected] = useState('admin')
    const [select, setSeleted] = useState('deliveryMan')
    // console.log(selected)
    const axiosSecure = useAxiosSecure()
    // console.log(selected)

    const updateAdminRole = async selectedRole =>{
      try{
        const { data }= await axiosSecure.patch(`/user/role/${email}`,
        { role: selectedRole})
        toast.success('Admin Role update successfully')
        refetch()
        console.log(data)
      }catch(err){
        // toast.error(err.response.data)
        console.log(err)
      }
    }
    const updateDeliveryManRole = async selectRole =>{
      try{
        const { data }= await axiosSecure.patch(`/user/role/${email}`,
        { role: selectRole})
        toast.success('Delivery Man Role update successfully')
        refetch()
        console.log(data)
      }catch(err){
        // toast.error(err.response.data)
        console.log(err)
      }
    }
   
    // console.log(userData)
    return ( 
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'></p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'></p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'></p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='sm:flex items-center justify-center gap-2 text-gray-900 m-2 whitespace-no-wrap'>
          <button onClick={() => updateDeliveryManRole(select)}  className='btn btn-sm'>Make Delivery Man</button>
          <button onClick={() => updateAdminRole(selected)} className='btn btn-sm'>Make Admin</button>
        </div>
      </td>
      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {status ? (
            <p
            className={`${
                status === 'Requested' ? 'text-yellow-500' : 'text-green-500'
            } whitespace-no-wrap`}
            >
            {status}
          </p>
        ) : (
            <p className='text-red-500'>Unavailable</p>
        )}
      </td> */}

      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
          >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
          <span className='relative'>Update Role</span>
        </span>
        
        <UpdateUserModal
          updateRole={updateRole}
          role={role}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </td> */}
    </tr>
    );
};

export default UserDataRow;