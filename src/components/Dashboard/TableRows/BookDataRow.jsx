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

    const confirmCancel = window.confirm(
      "Are you sure want to cancel this booking?"
    );
    if (confirmCancel) {
      try {
        await axiosSecure.delete(`/books/${_id}`);
        toast.success("Book successfully removed.");
        refetch();
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data);
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
      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:text-gray-100">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <p>{type}</p>
              </div>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:text-gray-100">
          <p className="text-gray-900 whitespace-no-wrap dark:bg-gray-800 dark:text-gray-100">{dateId}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:text-gray-100">
          <p className="text-gray-900 whitespace-no-wrap dark:bg-gray-800 dark:text-gray-100">{approximateDeliveryDate}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:text-gray-100">
          <p className="text-gray-900 whitespace-no-wrap dark:bg-gray-800 dark:text-gray-100">{readableDate}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:text-gray-100">
          <p className="text-gray-900 whitespace-no-wrap dark:bg-gray-800 dark:text-gray-100">{deliveryManId}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:text-gray-100">
          <p className="text-gray-900 whitespace-no-wrap dark:bg-gray-800 dark:text-gray-100">{status}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:text-gray-100">
          <p className="text-gray-900 space-y-1 whitespace-no-wrap">
            {status === "pending" && (
              <Link to={`/dashboard/update/${_id}`}>
                <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300" title="Update booking">
                  Update
                </button>
              </Link>
            )}
            {status === "pending" && (
              <button
                onClick={handleCancelBooking}
                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
                title="Cancel booking"
              >
                Cancel
              </button>
            )}
            {status === "Delivered" && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-300"
                disabled={isReviewCompleted}
              >
                {isReviewCompleted ? "Reviewed" : "Review"}
              </button>
            )}

            {status === "pending" && (
              <button
                onClick={() => window.location.href = `checkout/${_id}`}
                className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-300"
              >
                Pay
              </button>
            )}
          </p>
        </td>
      </tr>
      {isModalOpen && (
        <ReviewModal
          deliveryManId={deliveryManId}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleReviewSuccess}
          refetch={refetch}
        ></ReviewModal>
      )}
    </>
  );
};

export default BookDataRow;
