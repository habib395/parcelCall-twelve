import SectionTitle from "./../../../SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import AllDeliveryRow from "../../TableRows/AllDeliveryRow";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../../pages/Shared/LoadingSpinner";

const AllDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [deliveryMen, setDeliveryMen] = useState(true);

  useEffect(() => {
    const fetchDeliveryMen = async () => {
      try {
        const result = await axiosSecure(`/users/delivery/deliveryMan`);
        setDeliveryMen(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch delivery men", error);
        setLoading(false);
      }
    };
    fetchDeliveryMen();
  }, [axiosSecure]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle heading="All Delivery Men"></SectionTitle>
      <div className="py-4">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 text-gray-800 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Delivery Man's Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 text-gray-800 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 text-gray-800 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Number of Parcels Delivered
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 text-gray-800 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Average Review
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliveryMen?.map((user) => (
                  <AllDeliveryRow key={user?._id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
