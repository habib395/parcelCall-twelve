import React from "react";
import BookDataRow from "../../TableRows/BookDataRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
// import LoadingSpinner from './../../../../pages/Shared/LoadingSpinner';

const MyParcel = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    // console.log(user)
     
    const {
        data: books = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
           const { data } = await axiosSecure(`/books/${user?.email}`)
           return data
        },
    })
    // console.log(books)
    // if (isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Parcel Type
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Req.Delivery Date
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Appro. Delivery Date
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Booking Date
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Delivery Men ID
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
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
    </>
  );
};

export default MyParcel;

