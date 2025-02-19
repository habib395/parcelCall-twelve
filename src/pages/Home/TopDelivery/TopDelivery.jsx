import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const TopDelivery = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [topDeliveryMen, setTopDeliveryMen] = useState([]);

  useEffect(() => {
    const fetchTopDeliveryMen = async () => {
      try {
        const result = await axiosSecure("/topDeliveryMen");
        setTopDeliveryMen(result.data);
      } catch (error) {
        console.error("Failed to fetch top delivery men", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopDeliveryMen();
  }, [axiosSecure]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto py-10 px-6 dark:bg-gray-900 dark:text-white">
      <SectionTitle heading={"🏆 Top Delivery Men"} />
      
      <div className="flex flex-wrap justify-center gap-8 py-5">
        {topDeliveryMen.map((man) => (
          <div
            key={man._id}
            className="bg-yellow-100 border-2 border-yellow-500 rounded-xl shadow-lg w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            <figure className="overflow-hidden rounded-t-xl">
              <img
                src={man.image || "https://via.placeholder.com/150"}
                alt={man.name}
                className="w-full h-56 object-cover"
              />
            </figure>

            <div className="p-5 text-center">
              <h2 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{man.name || "N/A"}</h2>
              <p className="mt-2 text-yellow-600 font-medium dark:text-gray-400">
                📦 <strong>Parcels Delivered:</strong> {man.parcelsDelivered || 0}
              </p>
              <p className="mt-1 text-yellow-600 font-medium dark:text-gray-400">
                ⭐ <strong>Average Rating:</strong> {man.averageReview === 0 ? "No reviews" : man.averageReview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDelivery;
