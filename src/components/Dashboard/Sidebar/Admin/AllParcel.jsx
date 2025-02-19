import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "./../../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import AllBookDataRow from "../../TableRows/AllBookDataRow";
import ParcelModal from "../../../Modal/ParcelModal";
import toast from "react-hot-toast";

const AllParcel = () => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [fromDate, setFormDate] = useState("");
  const [toDate, setToDate] = useState("");

  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books", fromDate, toDate],
    queryFn: async () => {
      const { data } = await axiosSecure(`/parcels`, {
        params: {
          fromDate: fromDate || undefined,
          toDate: toDate || undefined,
        },
      });
      return data;
    },
  });

  const openModal = (book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBook(null);
  };

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle Subheading="All Parcels" />

      {/* Search Section */}
      <div className="py-4">
        <div className="sm:flex gap-4 mb-4">
          <input
            type="date"
            className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={fromDate}
            onChange={(e) => setFormDate(e.target.value)}
          />
          <input
            type="date"
            className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md transition-all duration-300 hover:bg-blue-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Parcel Table */}
      <div className="py-4">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {[
                    "User's Name",
                    "User's Phone",
                    "Booking Date",
                    "Req. Delivery Date",
                    "Cost",
                    "Status",
                    "",
                  ].map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-5 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 text-gray-800 dark:text-gray-300 text-left text-sm uppercase font-bold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <AllBookDataRow
                    key={book?._id}
                    book={book}
                    refetch={refetch}
                    openModal={openModal}
                  />
                ))}
              </tbody>
            </table>
            {isOpen && (
              <ParcelModal
                book={selectedBook}
                closeModal={closeModal}
                refetch={refetch}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllParcel;
