import SectionTitle from "./../../../SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import AllDeliveryRow from "../../TableRows/AllDeliveryRow";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../../pages/Shared/LoadingSpinner";

const AllDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [deliveryMen, setDeliveryMen] = useState([]);

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

  if (loading) return <LoadingSpinner />;

  return (
    <div className="mx-auto px-4 sm:px-20 selection:px-8 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <SectionTitle heading="All Delivery Men" />

      <div className="mt-6 overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full text-sm text-left table-auto">
          <thead>
            <tr className="border-b border-gray-200 dark:bg-gray-900 dark:text-white bg-white text-sm">
              <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200 uppercase">
                Delivery Man's Name
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200 uppercase">
                Phone Number
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200 uppercase">
                Parcels Delivered
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200 uppercase">
                Average Review
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 ">
            {deliveryMen?.map((user) => (
              <AllDeliveryRow key={user?._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
