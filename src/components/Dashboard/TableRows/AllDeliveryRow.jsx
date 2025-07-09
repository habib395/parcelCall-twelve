const AllDeliveryRow = ({ user }) => {
  const { name, phone, parcelsDelivered, averageReview } = user;

  return (
    <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <td className="px-6 py-4 text-sm text-gray-800 dark:text-white whitespace-nowrap">
        {name || "N/A"}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 dark:text-white whitespace-nowrap">
        {phone || "N/A"}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 dark:text-white whitespace-nowrap">
        {parcelsDelivered || "N/A"}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 dark:text-white whitespace-nowrap">
        {averageReview || "No reviews"}
      </td>
    </tr>
  );
};

export default AllDeliveryRow;
