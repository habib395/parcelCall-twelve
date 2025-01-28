import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllBookDataRow = ({ book, openModal }) => {
  const axiosSecure = useAxiosSecure()
  const { name, phone, readableDate, date, status, price } =
    book;

    const dateId = new Date(date).toDateString()
   
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <p>{name}</p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{readableDate}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{dateId}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{status}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 space-y-1 whitespace-no-wrap">
          <button
            className="btn"
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
