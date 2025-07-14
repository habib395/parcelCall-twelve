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
      {/* For large screens */}
      <tr className="hidden md:table-row hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300">
        <td className="px-5 py-4 border-b text-sm text-gray-900 dark:text-white dark:border-gray-700 bg-white dark:bg-gray-800">{type}</td>
        <td className="px-5 py-4 border-b text-sm text-gray-900 dark:text-white dark:border-gray-700 bg-white dark:bg-gray-800">{dateId}</td>
        <td className="px-5 py-4 border-b text-sm text-gray-900 dark:text-white dark:border-gray-700 bg-white dark:bg-gray-800">{approximateDeliveryDate}</td>
        <td className="px-5 py-4 border-b text-sm text-gray-900 dark:text-white dark:border-gray-700 bg-white dark:bg-gray-800">{readableDate}</td>
        <td className="px-5 py-4 border-b text-sm text-gray-900 dark:text-white dark:border-gray-700 bg-white dark:bg-gray-800">{deliveryManId}</td>
        <td className="px-5 py-4 border-b text-center font-semibold text-sm dark:border-gray-700 bg-white dark:bg-gray-800">
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              status === "Delivered"
                ? "bg-green-100 text-blue-700 dark:bg-green-200 dark:text-blue-800"
                : status === "pending"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            {status}
          </span>
        </td>
        <td className="px-5 py-4 border-b text-sm space-y-2 dark:border-gray-700 bg-white dark:bg-gray-800">
          {status === "pending" && (
            <>
              <Link to={`/dashboard/update/${_id}`}>
                <button className="w-full btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">Update</button>
              </Link>
              <button onClick={handleCancelBooking} className="w-full btn btn-sm bg-red-500 hover:bg-red-600 text-white">Cancel</button>
              <button onClick={() => (window.location.href = `checkout/${_id}`)} className="w-full btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">Pay</button>
            </>
          )}
          {status === "Delivered" && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              disabled={isReviewCompleted}
            >
              {isReviewCompleted ? "Reviewed" : "Review"}
            </button>
          )}
        </td>
      </tr>

      {/* For mobile screens */}
      <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4 border border-gray-200 dark:border-gray-700">
        <p><span className="font-semibold">Type:</span> {type}</p>
        <p><span className="font-semibold">Booking Date:</span> {dateId}</p>
        <p><span className="font-semibold">Approx. Delivery:</span> {approximateDeliveryDate}</p>
        <p><span className="font-semibold">Readable Date:</span> {readableDate}</p>
        <p><span className="font-semibold">Delivery Man ID:</span> {deliveryManId}</p>
        <p className="mt-2">
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              status === "Delivered"
                ? "bg-green-100 text-blue-700 dark:bg-green-200 dark:text-blue-800"
                : status === "pending"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            {status}
          </span>
        </p>

        <div className="mt-4 space-y-2">
          {status === "pending" && (
            <>
              <Link to={`/dashboard/update/${_id}`}>
                <button className="w-full btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">Update</button>
              </Link>
              <button onClick={handleCancelBooking} className="w-full btn btn-sm bg-red-500 hover:bg-red-600 text-white">Cancel</button>
              <button onClick={() => (window.location.href = `checkout/${_id}`)} className="w-full btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">Pay</button>
            </>
          )}
          {status === "Delivered" && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              disabled={isReviewCompleted}
            >
              {isReviewCompleted ? "Reviewed" : "Review"}
            </button>
          )}
        </div>
      </div>

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