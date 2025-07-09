import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReviewModal from "../../Modal/ReviewModal";
import { useState } from "react";

const BookDataRow = ({ book, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewCompleted, setIsReviewCompleted] = useState(false);

  const {
    _id,
    type,
    date,
    readableDate,
    status,
    approximateDeliveryDate,
    deliveryManId,
  } = book;

  const dateId = new Date(date).toDateString();

  const handleCancelBooking = async () => {
    if (status !== "pending") {
      toast.error("You can only cancel booking with a 'pending' status.");
      return;
    }

    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      try {
        await axiosSecure.delete(`/books/${_id}`);
        toast.success("Booking successfully canceled.");
        refetch();
      } catch (err) {
        toast.error(err?.response?.data || "Something went wrong");
      }
    }
  };

  const handleReviewSuccess = () => {
    setIsReviewCompleted(true);
    setIsModalOpen(false);
    refetch();
  };

  return (
    <>
      <tr className="hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300">
        <td className="px-5 py-4 border-b bg-white text-sm text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700">
          {type}
        </td>
        <td className="px-5 py-4 border-b bg-white text-sm text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700">
          {dateId}
        </td>
        <td className="px-5 py-4 border-b bg-white text-sm text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700">
          {approximateDeliveryDate}
        </td>
        <td className="px-5 py-4 border-b bg-white text-sm text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700">
          {readableDate}
        </td>
        <td className="px-5 py-4 border-b bg-white text-sm text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700">
          {deliveryManId}
        </td>
        <td className="px-5 py-4 border-b bg-white text-sm font-semibold text-center dark:bg-gray-800 dark:border-gray-700">
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              status === "Delivered"
                ? "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800"
                : status === "pending"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            {status}
          </span>
        </td>
        <td className="px-5 py-4 border-b bg-white text-sm dark:bg-gray-800 dark:border-gray-700 space-y-2">
          {status === "pending" && (
            <>
              <Link to={`/dashboard/update/${_id}`}>
                <button
                  className="w-full btn btn-sm bg-blue-500 hover:bg-blue-600 text-white transition duration-300"
                  title="Update Booking"
                >
                  Update
                </button>
              </Link>
              <button
                onClick={handleCancelBooking}
                className="w-full btn btn-sm bg-red-500 hover:bg-red-600 text-white transition duration-300"
                title="Cancel Booking"
              >
                Cancel
              </button>
              <button
                onClick={() => (window.location.href = `checkout/${_id}`)}
                className="w-full btn btn-sm bg-green-500 hover:bg-green-600 text-white transition duration-300"
                title="Pay Now"
              >
                Pay
              </button>
            </>
          )}
          {status === "Delivered" && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white transition duration-300"
              disabled={isReviewCompleted}
              title="Leave Review"
            >
              {isReviewCompleted ? "Reviewed" : "Review"}
            </button>
          )}
        </td>
      </tr>

      {isModalOpen && (
        <ReviewModal
          deliveryManId={deliveryManId}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleReviewSuccess}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default BookDataRow;
