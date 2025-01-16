import React from "react";

const UpdateParcel = ({ handleSubmit }) => {
    const { user } = useAuth()
  return (
    <div className="w-full p-4 sm:p-16 text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
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
              placeholder="Phone Number"
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
              placeholder="Parcel Type"
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
              placeholder="Parcel Weight"
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
              placeholder="Receiver's Name"
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
              placeholder="Parcel Weight"
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
              placeholder="Parcel Delivery Address"
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
              type="text"
              name="latitude"
              placeholder="Delivery Address Latitude"
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
              <span className="label-text">Delivery Addres Longitude</span>
            </label>
            <input
              type="text"
              name="longitude"
              placeholder="Requested Delivery Date"
              //   defaultValue={user && user.displayName}
              className="input input-bordered"
              required
            />
          </div>
          {/* price*/}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price(Tk)</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Delivery Address Latitude"
              //   defaultValue={user && user.email}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="btn btn-block bg-blue-400 my-3"
        />
      </form>
    </div>
  );
};

export default UpdateParcel;
