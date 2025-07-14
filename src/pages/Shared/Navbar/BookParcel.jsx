import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../LoadingSpinner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const BookParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      const response = await axiosSecure.get("/books");
      setBook(response.data);
    } catch (error) {
      setError("Error fetching data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="w-11/12 mx-auto py-10 dark:bg-gray-900 dark:text-white">
      <SectionTitle heading={"Total Book Parcels"} />
      {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-400 text-white uppercase tracking-wider dark:bg-gray-700 dark:text-gray-100">
                <th className="py-3 px-4 border">#</th>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Email</th>
                <th className="py-3 px-4 border">Type</th>
                <th className="py-3 px-4 border">Weight (kg)</th>
                <th className="py-3 px-4 border">Delivery</th>
                <th className="py-3 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {book.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                >
                  <td className="py-3 px-4 border text-center">{index + 1}</td>
                  <td className="py-3 px-4 border">{item.name}</td>
                  <td className="py-3 px-4 border">{item.email}</td>
                  <td className="py-3 px-4 border">{item.type}</td>
                  <td className="py-3 px-4 border text-center">{item.weight}</td>
                  <td className="py-3 px-4 border">{item.delivery}</td>
                  <td
                    className={`py-3 px-4 border text-center font-semibold ${
                      item.status === "Delivered"
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookParcel;
