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
    <section className="py-16 px-6 bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionTitle heading="Top Delivery Men" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {topDeliveryMen.map((man) => (
            <div
              key={man._id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={man.image || "https://via.placeholder.com/300x200"}
                  alt={man.name}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-blue-400">
                  {man.name || "Unnamed"}
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  <strong>Parcels Delivered:</strong> {man.parcelsDelivered || 0}
                </p>
                <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
                  <strong>Rating:</strong> {man.averageReview === 0 ? "No reviews" : man.averageReview.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDelivery;