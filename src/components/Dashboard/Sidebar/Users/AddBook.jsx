import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from './../../../../hooks/useAxiosSecure';
import AddParcel from '../../../Form/AddParcel';
import toast from 'react-hot-toast';
// import SectionTitle from '../../../SectionTitle/SectionTitle';

const AddBook = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [uploadImage, setUploadImage] = useState({
        image: { name: 'Upload Button' }
    });
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const type = form.type.value;
        const weight = form.weight.value;
        const rename = form.rename.value;
        const rePhone = form.rePhone.value;
        const delivery = form.delivery.value;
        const wantedDate = form.date.value;
        const date = new Date(wantedDate).getTime();
        const latitude = parseFloat(form.latitude.value);
        const longitude = parseFloat(form.longitude.value);

        if (!name || !email || !phone || !type || !weight || !rename || !rePhone || !delivery || !date || !latitude || !longitude) {
            toast.error("Please fill all fields correctly!");
            return;
        }

        const currentDate = Date.now();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        const readableDate = new Intl.DateTimeFormat("en-US", options).format(currentDate);

        const bookData = {
            name,
            email,
            phone,
            type,
            weight,
            rename,
            rePhone,
            delivery,
            date,
            latitude,
            longitude,
            price,
            readableDate,
            status: 'pending',
        };

        try {
            await axiosSecure.post('/books', bookData);
            toast.success('Data Added Successfully!');
            navigate('/dashboard/my-order');
        } catch (err) {
            console.log(err);
            toast.error('Failed to book the parcel!');
        } finally {
            setLoading(false);
        }
    };

    const handleWeightChange = (e) => {
        const weight = parseFloat(e.target.value);
        if (weight <= 1) {
            setPrice(50);
        } else if (weight === 2) {
            setPrice(100);
        } else if (weight > 2) {
            setPrice(150);
        }
    };

    return (
        <div className="py-10 w-11/12 mx-auto dark:bg-gray-900 dark:text-white">
            {/* <SectionTitle heading={"Add Book"} /> */}
            <div className="grid md:grid-cols-1 gap-8 items-center">
                {/* Add Book Card */}
                <div
                    className="bg-blue-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-200 dark:bg-gray-800 dark:text-gray-100"
                    data-aos="fade-up"
                >
                    <AddParcel
                        handleSubmit={handleSubmit}
                        price={price}
                        uploadImage={uploadImage}
                        setUpLoadImage={setUploadImage}
                        loading={loading}
                        handleWeightChange={handleWeightChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddBook;
