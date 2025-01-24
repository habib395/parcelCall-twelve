import { useState, useEffect } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "./../../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const MyDelivery = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure();
  const [deliveryManId, setDeliveryManId] = useState(null)
  console.log(deliveryManId)

  useEffect(() =>{
    const fetchUserId = async() =>{
      try{
        if(user?.email){
          const response = await axiosSecure.get(`/userId/${user.email}`)
          setDeliveryManId(response.data._id)
        }
      }catch(error){
        console.error('Failed to fetch user ID', error)
        toast.error('Failed to fetch user details.')
      }
    }
    fetchUserId()
  },[user, axiosSecure])

  

  const { data: deliveries = [], refetch } = useQuery({
    queryKey: ["myDeliveries", deliveryManId],
    queryFn: async () => {
      if(!deliveryManId) return []
      const response = await axiosSecure.get(
        `parcel/deliveryMan/${deliveryManId}`
      );
      return response.data.data;
    },
    enabled: !!deliveryManId,
  });
  console.log(deliveries)

  const handleCancel = async (parcelId) => {
    if (window.confirm("Are you sure you want to cancel this parcel?")) {
      try {
        await axiosSecure.patch(`/parcel/status/${parcelId}`, {
          status: "Cancelled",
        });
        toast.success("Parcel has been cancelled!");
        refetch();
      } catch (error) {
        toast.error("Failed to cancel the parcel");
      }
    }
  };

  const handleDeliver = async (parcelId) => {
    if (window.confirm("Confirm that the parcel has been delivered.")) {
      try {
        await axiosSecure.patch(`/parcels/status/${parcelId}`, {
          status: "Delivered",
        });
        toast.success("Parcel marked as delivered!");
        refetch();
      } catch (error) {
        console.error(error);
        toast.error("Failed to update parcel status.");
      }
    }
  };
  return (
    <div>
      <SectionTitle Subheading="Assigned Parcels"></SectionTitle>
      <div className="py-4">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Booked User's Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Receiver's Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Booked User's Phone
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Requested Delivery Date
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Approximate Delivery Date
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Receiver's Phone
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Receiver's Address
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              {deliveries?.map((delivery) => {
                return (
                  <tr key={delivery._id}>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      {delivery.name}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      {delivery.rename}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      {delivery.phone}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      {delivery.date}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      {delivery.approximateDeliveryDate}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      {delivery.rePhone}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      {delivery.delivery}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800 text-sm">
                      <button
                        className="btn btn-sm btn-warning mr-2"
                        onClick={() => handleCancel(delivery._id)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleDeliver(delivery._id)}
                      >
                        Deliver
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDelivery;
