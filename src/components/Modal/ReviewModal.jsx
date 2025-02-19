import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ReviewModal = ({ deliveryManId, onClose, refetch, onSuccess }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      reviewerName: user?.displayName,
      reviewerImage: user?.photoURL,
      deliveryManId,
      rating: parseFloat(rating),
      feedback,
      reviewDate: new Date(),
    };

    try {
      await axiosSecure.post("/review", reviewData);
      toast.success("Review submitted successfully");
      if (onSuccess) {
        onSuccess();
      }
      onClose();
      refetch();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="py-8">
      <dialog id="my_modal_3" className="modal modal-open">
        <div className="modal-box bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="font-bold text-lg text-center mb-4">Manage Parcel</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                User Name
              </label>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                User Image
              </label>
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Rating (out of 5)
              </label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="5"
                step="0.1"
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Delivery Man ID
              </label>
              <input
                type="text"
                value={deliveryManId}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-sm bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-white transition-all duration-300 hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-sm bg-blue-500 text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 hover:bg-blue-600"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ReviewModal;
