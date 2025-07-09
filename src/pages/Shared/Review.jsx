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
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-5 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.reviewerImage || "https://via.placeholder.com/150"}
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-blue-500 dark:border-blue-400 mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {review.reviewerName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mb-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Rating:{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {review.rating} / 5
                  </span>
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {review.feedback}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
