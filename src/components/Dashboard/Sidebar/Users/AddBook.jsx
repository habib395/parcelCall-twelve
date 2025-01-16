import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from './../../../../hooks/useAxiosSecure';
import AddParcel from '../../../Form/AddParcel';
import toast from 'react-hot-toast';

const AddBook = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [uploadImage, setUploadImage] = useState({
        image: { name: 'Upload Button'}
    })

    // console.log(uploadImage)

    const [loading, setLoading] = useState(false)

    const handleSubmit = async e =>{
        e.preventDefault()
        setLoading(true)
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
        const price = form.price.value 
        const currentDate = Date.now()
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          };
          const readableDate = new Intl.DateTimeFormat("en-US", options).format(
            currentDate
          )

        //user info
        const users = {
            name: user?.displayName ,
            image: user?.photoURL ,
            email: user?.email,
        }


        //booking data 
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
            users
        }
        
        // console.table(bookData)


        // save bookData in db
        try{
            await axiosSecure.post('/books', bookData)
            toast.success('Data Added Successfully!')
            navigate('/dashboard/my-order')
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }
    return (
        <div>
            <AddParcel
            handleSubmit={handleSubmit}
            uploadImage={uploadImage}
            setUpLoadImage={setUploadImage}
            loading={loading}
            ></AddParcel>
        </div>
    );
};

export default AddBook;