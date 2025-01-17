import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import useRole from './../../../../hooks/useRole';

const MyProfile = () => {
    const { user } = useAuth()
    const [role, isLoading] = useRole()
    // console.log(role)
    // console.log(user)
    return (
        <div className="w-full p-4 sm:p-16 text-gray-800 rounded-xl bg-gray-50">
            {/* <h3 className="text-center">My PROFILE</h3> */}
            <SectionTitle heading='My Profile'></SectionTitle>
            <div className='flex gap-10 px-4'>
            <img className='rounded-lg' src={user.photoURL} alt="" />
            <h4 className='text-2xl'>I am {user.displayName} a {role}</h4>
            </div>
             <div className='px-5'>
              <label htmlFor="image" className="block text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <button className='btn btn-sm bg-blue-300 mx-5 my-2'>Update</button>
        </div>
    );
};

export default MyProfile;