import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const UserDataRow = ( {userData, refetch}) => {
    const { _id, role, name, email, phone } = userData || {}
    const [selected, setSelected] = useState('admin')
    const [select, setSeleted] = useState('deliveryMan')
    // console.log(selected)
    const axiosSecure = useAxiosSecure()
    // console.log(selected)

    const updateAdminRole = async selectedRole =>{
      if (role === selectedRole) return toast.error('Already Admin')
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
      if (role === select) return toast.error('Already Delivery Man')
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
        <p className='text-gray-900 whitespace-no-wrap'>{phone}</p>
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
    </tr>
    );
};

export default UserDataRow;