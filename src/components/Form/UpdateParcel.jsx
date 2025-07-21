import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../SectionTitle/SectionTitle";
import axios from "axios";

const UpdateParcel = () => {
    const { user } = useAuth()
    const item = useLoaderData()
  console.log(item)
  const { _id, name, rename, email, type, delivery, price, date, rePhone, latitude, phone, weight, longitude } = item

  const handleUpdateBooks = (e) =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value 
    const email = form.email.value 
    const phone = form.phone.value
    const type = form.type.value 
    const weight = form.weight.value 
    const rename = form.rename.value
    const rePhone = form.rePhone.value
    const delivery = form.delivery.value 
    const date = form.date.value
    const latitude = form.latitude.value
    const longitude = form.longitude.value

    const newBooks = {
      name, email, phone, type, weight, rename, rePhone, delivery, date, latitude, longitude
    }


    axios.put(`https://parcel-call-server-side.vercel.app/${_id}`, newBooks, {
      headers: {
        "Content-Type": 'application/json',
      },
    })
    .then((response) =>{
      const data = response.data
      console.log(data)
    })
    .catch((error) =>{
      console.error('Error updating books:', error)
    })
    event.target.reset()

  }

  return (
    <div className="w-full p-4 sm:p-16 text-gray-800 rounded-xl bg-gray-50">
      <SectionTitle heading='Update Book'></SectionTitle>
      <form onSubmit={handleUpdateBooks}>
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
              defaultValue={name}
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
              defaultValue={email}
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
                defaultValue={phone}
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
                defaultValue={type}
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
                defaultValue={weight}
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
                defaultValue={rename}
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
              defaultValue={rePhone}
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
              defaultValue={delivery}
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
              defaultValue={date}
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
                defaultValue={latitude}
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
                defaultValue={longitude}
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
                defaultValue={price}
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
