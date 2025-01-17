import React from "react";
import SectionTitle from "./../../../SectionTitle/SectionTitle";

const MyDelivery = () => {
  return (
    <div>
      <SectionTitle Subheading="Assigned Parcels"></SectionTitle>
      <div className="py-4">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
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
                    Action
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {users?.map((user) => (
                 <MyDeliveryRow
                    key={deliveries?._id}
                    deliveries={deliveries}
                    refetch={refetch}
                  />
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDelivery;
