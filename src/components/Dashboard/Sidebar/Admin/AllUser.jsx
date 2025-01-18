import React from "react";
import UserDataRow from "../../TableRows/UserDataRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";


const AllUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
 
  // console.log(user)
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
  console.log(users);

  

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
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    User's Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Number of Parcels Booked
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Total Spent Amount
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((userData) => (
                  <UserDataRow
                    refetch={refetch}
                    key={userData?._id}
                    userData={userData}
                    // updateRole={updateRole}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <UserDataRow></UserDataRow>
    </div>
  );
};

export default AllUser;
