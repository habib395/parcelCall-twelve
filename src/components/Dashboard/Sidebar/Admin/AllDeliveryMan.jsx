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
      } catch (error) {
        console.error("Failed to fetch delivery men", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDeliveryMen();
  }, [axiosSecure]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="mx-auto px-4 sm:px-8 py-10 dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900 transition-all duration-300">
      <SectionTitle heading="All Delivery Men" />

      <div className="overflow-x-auto mt-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="text-left bg-gray-100 dark:bg-gray-700">
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 uppercase font-semibold">
                Delivery Man's Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 uppercase font-semibold">
                Phone Number
              </th>
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 uppercase font-semibold">
                Number of Parcels Delivered
              </th>
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 uppercase font-semibold">
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
  );
};

export default AllDeliveryMan;