import React from 'react';

const AllBookDataRow = ({ book }) => {
    console.log(book)
    const { name, phone, readableDate, date, status, type, delivery, price} = book
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
              <p>{name}</p>
              </div>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{phone}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{readableDate}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{date}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'></p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 space-y-1 whitespace-no-wrap'>
            <button className="btn btn-sm">Update</button>
            <button className="btn btn-sm">Cancel</button>
            <button className="btn btn-sm">Pay</button>
          </p>
        </td>
      </tr>
    );
};

export default AllBookDataRow;