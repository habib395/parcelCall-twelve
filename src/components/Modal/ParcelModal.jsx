
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from 'react-hot-toast';
const ParcelModal = ({ book }) => {
  const { user } = useAuth();
  const [selected , setSelected] = useState('On the Way')
  console.log(book);
  const { email, status } = book

  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const result  = await axiosSecure(`/users/delivery/deliveryMan`);
      return result.data
    },
  });
  console.log(users)

  const updateManageButton = async selectedStatus =>{
    if (status === 'On the Way') return toast.error('Already Update Status!')
    try
    {
        const { data } = await axiosSecure.patch(`book/status/${email}`, 
        {status: selectedStatus}
    )
    toast.success('Status update successfully')
    refetch()
    console.log(data)
  }catch(err){
    console.log(err)
  }
}
  return (
    <div className="py-8">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
         
          <h3 className="font-bold text-lg text-center">Manage Parcel</h3>
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600 ">
              Delivery Man
            </label>
            <select
              required
              className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
              name="category"
            >
              <option value="Indoor">Select Delivery Man</option>
              {
                users.map((user) =>{
                    return <option key={user._id} value={user._id}>{user.name}</option>
                })
              }
              
            </select>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600 ">
              Approximate Delivery Date
            </label>
            <input className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white" type="date" />
            <div className="flex justify-center items-center gap-2">
            <button onClick={() => updateManageButton(selected)} className="btn btn-sm bg-blue-400">Assign</button>
            {/* <button className="btn btn-sm bg-red-400">Cancel</button> */}
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm">
              Cancel
            </button>
          </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ParcelModal;
