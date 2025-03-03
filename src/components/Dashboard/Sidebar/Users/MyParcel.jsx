import React, { useState } from "react";
import BookDataRow from "../../TableRows/BookDataRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import LoadingSpinner from "./../../../../pages/Shared/LoadingSpinner";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedStatus, setSelectedStatus] = useState("All");

  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/books/${user?.email}`);
      return data;
    },
  });

  const handleFilterChange = (status) => {
    setSelectedStatus(status);
  };

  const filteredBooks =
    selectedStatus === "All"
      ? books
      : books.filter((book) => book.status === selectedStatus);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="py-10 w-11/12 mx-auto dark:bg-gray-900 dark:text-white">
      <div className="bg-blue-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-200 dark:bg-gray-800 dark:text-gray-100">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="flex items-center gap-5 py-3">
              <h4>Filter by Status:</h4>
              <div className="dropdown dropdown-hover dark:text-gray-800">
                <div tabIndex={0} role="button" className="btn m-1">
                  {selectedStatus || "All"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <button onClick={() => handleFilterChange("All")}>
                      All
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("Pending")}>
                      Pending
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("On the Way")}>
                      On the Way
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("Delivered")}>
                      Delivered
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold dark:bg-gray-700 dark:text-gray-100">
                      Parcel Type
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold dark:bg-gray-700 dark:text-gray-100">
                      Req. Delivery Date
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold dark:bg-gray-700 dark:text-gray-100">
                      Appro. Delivery Date
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold dark:bg-gray-700 dark:text-gray-100">
                      Booking Date
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold dark:bg-gray-700 dark:text-gray-100">
                      Delivery Men ID
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold dark:bg-gray-700 dark:text-gray-100">
                      Status
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold dark:bg-gray-700 dark:text-gray-100">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map((book) => (
                    <BookDataRow
                      key={book?._id}
                      book={book}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyParcel;
