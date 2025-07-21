import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    useEffect(() =>{
        axiosInstance.interceptors.request.use(
            res =>{
                return res
            },
            async error => {
                console.log('Error caught in axios interceptors', error.response)
                if(error.response.status === 401 || error.response.status === 403){
                    logOut()
                    navigate('/login')
                }
                return Promise.reject(error)
            }
        )
    }, [logOut, navigate])
    return axiosInstance
};

export default useAxiosSecure;