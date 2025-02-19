import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../pages/Shared/LoadingSpinner";

const MyReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const userResponse = await axiosSecure.get(`/user/id/${user?.email}`);
        const deliveryMan = userResponse?.data;

        if (deliveryMan) {
          const reviewResponse = await axiosSecure.get(
            `/review/${deliveryMan.id}`
          );
          setReviews(reviewResponse?.data);
        } else {
          toast.error("You are not authorized to view this page.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch reviews.");
      } finally {
        setIsLoading(false);
      }
    };
    if (user?.email) {
      fetchReviews();
    }
  }, [user?.email, axiosSecure]);

  return (
    <div className="container mx-auto py-8 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-semibold mb-6">My Reviews</h2>

      {isLoading ? (
        <div><LoadingSpinner /></div>
      ) : reviews.length === 0 ? (
        <div>No reviews found in the backend.</div> 
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="card p-4 border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.reviewerImage || "https://via.placeholder.com/150"}
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{review.reviewerName}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Rating: {review.rating} / 5</p>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p>{review.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReview;
