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
      <dialog id="my_modal_3" className="modal" open>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Manage Parcel</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                User Name
              </label>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                User Image
              </label>
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Rating (out of 5)
              </label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="5"
                step="0.1"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Delivery Man ID
              </label>
              <input
                type="text"
                value={deliveryManId}
                readOnly
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-sm bg-gray-300 text-gray-700 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-sm bg-blue-500 text-white"
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
