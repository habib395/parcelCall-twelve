
const AllDeliveryRow = ({ user }) => {
    const { name, phone, parcelsDelivered, averageReview  } = user
    // console.log(user)
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
              <p>{name || "N/A"}</p>
              </div>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{phone || "N/A"}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{parcelsDelivered || "N/A"}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{averageReview || "No reviews"}</p>
        </td>
      </tr>
    );
};

export default AllDeliveryRow;