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
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch top delivery men", error);
        setLoading(false);
      }
    };
    fetchTopDeliveryMen();
  }, [axiosSecure]);
  // console.log(topDeliveryMen)

  if (loading) return <LoadingSpinner />;
  return (
    <div>
      <SectionTitle heading={"Top Delivery Man"}></SectionTitle>
      <div className="sm:flex justify-evenly items-center gap-2 py-5">
      {/* Top three delivery Man are here */}
      {
        topDeliveryMen.map((man) =>(
          <div key={man._id} className="card bg-base-100 shadow-lg">
          <figure>
            <img
              src={man.image || "https://via.placeholder.com/150"}
              alt={man.name}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">{man.name || "N/A"}</h2>
            <p>
              <strong>Parcels Delivered:</strong> {man.parcelsDelivered || 0}
            </p>
            <p>
              <strong>Average Rating:</strong>{" "}
              {man.averageReview === 0 ? "No reviews" : man.averageReview}
            </p>
          </div>
        </div>
        ))
      }
        
      </div>
    </div>
  );
};

export default TopDelivery;
