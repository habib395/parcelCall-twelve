import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

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
    <div
      id="Reviews"
      className="mx-auto py-12 sm:px-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <SectionTitle heading={"Customer Reviews"} />

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner />
        </div>
      ) : reviewss.length === 0 ? (
        <div className="text-center text-blue-500 font-semibold text-lg">
          No reviews found in the backend.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {reviewss.map((review) => (
            <div
              key={review._id}
              className="bg-blue-100 border border-blue-400 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.reviewerImage || "https://via.placeholder.com/150"}
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-blue-500 mr-4"
                />
                <div>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{review.reviewerName}</p>
                  <p className="text-sm text-blue-500 dark:text-gray-400">
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-blue-600 font-semibold dark:text-blue-400">
                  Rating: <span className="text-blue-700 dark:text-blue-500">{review.rating} / 5</span>
                </p>
              </div>

              <p className="text-blue-700 dark:text-gray-300">{review.feedback}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;