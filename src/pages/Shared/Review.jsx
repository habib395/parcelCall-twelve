import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

const Review = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [reviewss, setReviewss] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviewss = async () => {
    try {
      const response = await axiosSecure.get("/reviews"); 
      setReviewss(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviewss();
  }, []);

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">
        ⭐ Customer Reviews ⭐
      </h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner />
        </div>
      ) : reviewss.length === 0 ? (
        <div className="text-center text-yellow-500 font-semibold text-lg">
          No reviews found in the backend.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reviewss.map((review) => (
            <div
              key={review._id}
              className="bg-yellow-100 border border-yellow-400 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.reviewerImage || "https://via.placeholder.com/150"}
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-yellow-500 mr-4"
                />
                <div>
                  <p className="font-bold text-yellow-600">{review.reviewerName}</p>
                  <p className="text-sm text-yellow-500">
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-yellow-600 font-semibold">
                  ⭐ Rating: <span className="text-yellow-700">{review.rating} / 5</span>
                </p>
              </div>

              <p className="text-yellow-700">{review.feedback}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
