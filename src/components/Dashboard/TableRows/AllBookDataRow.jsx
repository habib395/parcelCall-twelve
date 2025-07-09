import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllBookDataRow = ({ book, openModal }) => {
  const axiosSecure = useAxiosSecure();
  const { name, phone, readableDate, date, status, price } = book;

  const dateId = new Date(date).toDateString();

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center">
          <p className="text-gray-900 dark:text-white">{name}</p>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white">{phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white">{readableDate}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white">{dateId}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white">{price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white">{status}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="text-gray-900 space-y-1 whitespace-no-wrap">
          <button
            className={`btn ${status === "Delivered" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} text-white px-4 py-2 rounded-md transition-all duration-300`}
            onClick={() => openModal(book)}
            disabled={status === "Delivered"}
          >
            Manage
          </button>
        </p>
      </td>
    </tr>
  );
};

export default AllBookDataRow;
