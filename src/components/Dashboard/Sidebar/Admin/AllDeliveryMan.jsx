import SectionTitle from "./../../../SectionTitle/SectionTitle";
import useAuth from "./../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AllDeliveryRow from "../../TableRows/AllDeliveryRow";
const AllDeliveryMan = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const {
    data: deliveryMen = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["deliveryMen", user?.email],
    queryFn: async () => {
      const result  = await axiosSecure(`/users/delivery/deliveryMan`);
      return result.data
    },
  });
  // console.log(users)
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle Subheading="All Delivery Man"></SectionTitle>
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
                    Delivery Man's Name
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
                    Number of Parcels Delivered
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                  >
                   Average Review
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliveryMen?.map((user) => (
                  <AllDeliveryRow
                    key={user?._id}
                    user={user}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
