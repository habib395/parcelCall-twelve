import SectionTitle from "./../SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";

const AddParcel = ({ handleSubmit, imageUpload, setUploadImage, loading, handleWeightChange, price }) => {
  const { user } = useAuth();

  return (
    <div className="py-12 px-4 sm:px-10 lg:px-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <SectionTitle heading="Book A Parcel" />

      <div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 sm:p-10 transform transition-all duration-300 hover:scale-[1.01]"
        data-aos="fade-up"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row One */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                readOnly
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Row Two */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Phone Number</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Phone Number"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Parcel Type</label>
              <input
                type="text"
                name="type"
                placeholder="Enter Parcel Type"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Row Three */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Parcel Weight</label>
              <input
                type="number"
                name="weight"
                onChange={handleWeightChange}
                placeholder="Enter Parcel Weight"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Receiver's Name</label>
              <input
                type="text"
                name="rename"
                placeholder="Enter Receiver's Name"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Row Four */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Receiver's Phone Number</label>
              <input
                type="number"
                name="rePhone"
                placeholder="Enter Receiver's phone"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Delivery Address</label>
              <input
                type="text"
                name="delivery"
                placeholder="Enter Delivery Address"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Row Five */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Requested Delivery Date</label>
              <input
                type="date"
                name="date"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Latitude</label>
              <input
                type="number"
                name="latitude"
                step="0.000001"
                placeholder="Enter Latitude"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Row Six */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Longitude</label>
              <input
                type="number"
                name="longitude"
                step="0.000001"
                placeholder="Enter Longitude"
                required
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label font-medium">Price (Tk)</label>
              <input
                type="number"
                name="price"
                value={price}
                readOnly
                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-4 mt-4 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Booking..." : "Book Parcel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddParcel;