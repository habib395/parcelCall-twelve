import UserDataRow from "../../TableRows/UserDataRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import LoadingSpinner from './../../../../pages/Shared/LoadingSpinner';

const AllUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`);
      return data;
    },
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) {
    return <div><LoadingSpinner></LoadingSpinner></div>;
  }

  return (
    <div>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    User's Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Number of Parcels Booked
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Total Spent Amount
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-left text-sm uppercase font-bold"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((userData) => (
                  <UserDataRow
                    refetch={refetch}
                    key={userData?._id}
                    userData={userData}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            className={`btn ${currentPage === 1 ? "btn-disabled" : ""}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <p className="text-gray-800 dark:text-white">
            Page {currentPage} of {totalPages}
          </p>
          <button
            className={`btn ${currentPage === totalPages ? "btn-disabled" : ""}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllUser;


