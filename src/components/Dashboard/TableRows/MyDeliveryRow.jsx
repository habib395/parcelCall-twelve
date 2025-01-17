import React from 'react';

const MyDeliveryRow = ({ deliveries }) => {
    return (
        <tr>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          Booked User's Name
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          Receiver's Name
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          Booked User's Phone
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          Requested Delivery Date
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          Approximate Delivery Date
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          Receiver's Phone
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          Receiver's Address
        </th>
        <th
          scope="col"
          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
        >
          <button className="btn btn-sm">Location</button>
          <button className="btn btn-sm">Cancel</button>
          <button className="btn btn-sm">Deliver</button>
        </th>
      </tr>
    );
};

export default MyDeliveryRow;