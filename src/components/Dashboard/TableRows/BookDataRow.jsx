

const BookDataRow = ({book}) => {
    const { name, type, delivery, price, date, readableDate, status } = book
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
              <p>{type}</p>
              </div>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{date}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'></p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{readableDate}</p>
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

export default BookDataRow;



// date
// : 
// "2025-01-07"
// delivery
// : 
// "6"
// email
// : 
// "adil@gmail.com"
// latitude
// : 
// "8"
// longitude
// : 
// "9"
// name
// : 
// "Abil"
// phone
// : 
// "1"
// price
// : 
// "10"
// rePhone
// : 
// "5"
// rename
// : 
// "4"
// type
// : 
// "2"
// users
// : 
// {name: 'Abil', image: 'https://i.ibb.co.com/j3pbKDv/avater.png', email: 'adil@gmail.com'}
// weight
// : 
// "3"
// _id
// : 
// "67887e64f22fc221fcacc2c0"