import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BookDataRow = ({ book, refetch }) => {
  const axiosSecure = useAxiosSecure();
  // const [bookList, setBookList] = useState([])
  const {
    _id,
    type,
    date,
    readableDate,
    status,
    approximateDeliveryDate,
    deliveryManId,
  } = book;
  // console.log(book)

  const handleCancelBooking = async () => {
    if (status !== "pending") {
      toast.error("You can only cancel booking with a 'pending' status.");
      return;
    }

    const confirmCancel = window.confirm(
      "Are you sure want to cancel this  booking?"
    );
    if (confirmCancel) {
      try {
        await axiosSecure.delete(`/books/${_id}`);
        toast.success("Book successfully removed.");
        refetch();
      } catch (err) {
        console.log(err);
        toast.error(err.response.data);
      }
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <p>{type}</p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{date}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {approximateDeliveryDate}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{readableDate}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{deliveryManId}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{status}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 space-y-1 whitespace-no-wrap">
          {status === "pending" && (
            <Link to={`/dashboard/update/${_id}`}>
              <button className="btn btn-sm" title="Update booking">
                Update
              </button>
            </Link>
          )}
          {status === "pending" && (
            <button
              onClick={handleCancelBooking}
              className="btn btn-sm"
              title="Cancel booking"
            >
              Cancel
            </button>
          )}
          {status === "Delivered" && (
            <button className="btn btn-sm">Review</button>
          )}
          <button className="btn btn-sm">Pay</button>
        </p>
      </td>
    </tr>
  );
};

export default BookDataRow;
