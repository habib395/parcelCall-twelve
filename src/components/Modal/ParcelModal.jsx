import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from 'react-hot-toast';
const ParcelModal = ({ book, closeModal, refetch}) => {

  const axiosSecure = useAxiosSecure();
  const [deliveryManId, setDeliveryManId] = useState("")
  const [approximateDeliveryDate, setApproximateDeliveryDate] = useState("")
  
  const {
    data: deliveryMen = [],
  } = useQuery({
    queryKey: ["deliveryMen"],
    queryFn: async () => {
      const { data }  = await axiosSecure(`/users/delivery/deliveryMan`);
      return data
    },
  });
  // console.log(deliveryMen)

  const handleAssign = async() =>{
    if(!deliveryManId || !approximateDeliveryDate){
      return toast.error("Please select a delivery man and set a delivery date.")
    }

    try{
      const { data } = await axiosSecure.patch(`book/status/${book._id}`,{
        status: "On the Way",
        deliveryManId,
        approximateDeliveryDate,
      })
      toast.success("Parcel assign successfully!")
      refetch()
      closeModal()
    }catch(err){
      console.error(err)
      toast.error("Failed to assign parcel")
    }
  }
  
  return (
    <div className="py-8">
      <dialog id="my_modal_3" className="modal" open>
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
              onChange={(e) => setDeliveryManId(e.target.value)}
            >
              <option value="">Select Delivery Man</option>
              {
                deliveryMen?.map((man) =>{
                   return <option key={man._id} value={man._id}>{man.name}</option>
                })
              }
            </select>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600 ">
              Approximate Delivery Date
            </label>
            <input className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white" type="date" onChange={(e) => setApproximateDeliveryDate(e.target.value)} />
            <div className="flex justify-center items-center gap-2"> 
            <button onClick={handleAssign} className="btn btn-sm bg-blue-400">Assign</button>
            <button onClick={closeModal} className="btn btn-sm">
              Cancel
            </button>
          {/* </form> */}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ParcelModal;
