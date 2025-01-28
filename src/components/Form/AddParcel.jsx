import SectionTitle from "./../SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";

const AddParcel = ({ handleSubmit, imageUpload, setUploadImage, loading, handleWeightChange, price }) => {
    const { user } = useAuth()
  return (
    <div className="w-full p-4 sm:p-16 text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <SectionTitle heading='Book A Parcel'></SectionTitle>
        {/*row one */}
        <div className="md:flex gap-4">
        {/* name */}
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
          {/* email */}
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
        {/* row two */}
        <div className="md:flex gap-4">
        {/* phone number */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone Number"
            //   defaultValue={user && user.displayName}
              className="input input-bordered"
              required
            />
          </div>
          {/* parcel type */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Parcel Type</span>
            </label>
            <input
              type="text"
              name="type"
              placeholder="Enter Parcel Type"
            //   defaultValue={user && user.email}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* row three */}
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
            //   defaultValue={user && user.displayName}
              className="input input-bordered"
              required
            />
          </div>
          {/* rename*/}
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
        {/* row four*/}
        <div className="md:flex gap-4">
        {/* rename phone */}
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
          {/* delievery Address*/}
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
        {/* row five*/}
        <div className="md:flex gap-4">
        {/* delivery data */}
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
          {/* latitude*/}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Delivery Address Latitude</span>
            </label>
            <input
              type="number"
              step='0.000001'
              name="latitude"
              placeholder="Enter Latitude"
            //   defaultValue={user && user.email}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* row six*/}
        <div className="md:flex gap-4">
        {/* longitude */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Delivery Address Longitude</span>
            </label>
            <input
              type="number"
              step='0.000001'
              name="longitude"
              placeholder="Enter longitude"
            //   defaultValue={user && user.displayName}
              className="input input-bordered"
              required
            />
          </div>
          {/* price*/}
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
            //   defaultValue={user && user.email}
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
          {
            loading ? 'Booking' : 'Book Parcel'
          }
        </button>
      </form>
    </div>
  );
};

export default AddParcel;

