import SectionTitle from "./../SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";

const AddParcel = ({ handleSubmit, imageUpload, setUploadImage, loading, handleWeightChange, price }) => {
  const { user } = useAuth();
  return (
    <div className="py-10 w-11/12 mx-auto dark:bg-gray-900 dark:text-white">
      <SectionTitle heading="Book A Parcel" />
      <div
        className="bg-blue-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-200 dark:bg-gray-800 dark:text-gray-800"
        data-aos="fade-up"
      >
        <form onSubmit={handleSubmit}>
          {/* Row One */}
          <div className="md:flex gap-4">
            {/* Name */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                defaultValue={user && user.displayName}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
            {/* Email */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="User Email"
                defaultValue={user && user.email}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
          </div>

          {/* Row Two */}
          <div className="md:flex gap-4">
            {/* Phone Number */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            {/* Parcel Type */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Parcel Type</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter Parcel Type"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Row Three */}
          <div className="md:flex gap-4">
            {/* Parcel Weight */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Parcel Weight</span>
              </label>
              <input
                type="number"
                name="weight"
                onChange={handleWeightChange}
                placeholder="Enter Parcel Weight"
                className="input input-bordered"
                required
              />
            </div>
            {/* Receiver's Name */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Receiver's Name</span>
              </label>
              <input
                type="text"
                name="rename"
                placeholder="Enter Receiver's Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Row Four */}
          <div className="md:flex gap-4">
            {/* Receiver's Phone Number */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Receiver's Phone Number</span>
              </label>
              <input
                type="number"
                name="rePhone"
                placeholder="Enter Receiver's phone"
                className="input input-bordered"
                required
              />
            </div>
            {/* Delivery Address */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Parcel Delivery Address</span>
              </label>
              <input
                type="text"
                name="delivery"
                placeholder="Enter Delivery Address"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Row Five */}
          <div className="md:flex gap-4">
            {/* Requested Delivery Date */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Requested Delivery Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Requested Delivery Date"
                className="input input-bordered"
                required
              />
            </div>
            {/* Latitude */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Delivery Address Latitude</span>
              </label>
              <input
                type="number"
                step="0.000001"
                name="latitude"
                placeholder="Enter Latitude"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Row Six */}
          <div className="md:flex gap-4">
            {/* Longitude */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Delivery Address Longitude</span>
              </label>
              <input
                type="number"
                step="0.000001"
                name="longitude"
                placeholder="Enter longitude"
                className="input input-bordered"
                required
              />
            </div>
            {/* Price */}
            <div className="form-control md:w-1/2 py-2">
              <label className="label">
                <span className="label-text">Price(Tk)</span>
              </label>
              <input
                type="number"
                name="price"
                value={price}
                readOnly
                placeholder="Delivery Address Latitude"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            value="submit"
            className={`w-full py-4 bg-blue-500 text-white font-semibold rounded ${
              loading ? 'opacity-50  cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Booking' : 'Book Parcel'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddParcel;
