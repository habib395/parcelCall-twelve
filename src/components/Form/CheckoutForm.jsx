import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const CheckoutForm = ({ parcelId }) => {
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async(event) =>{
        event.preventDefault()
        setIsProcessing(true)

        if(!stripe || !elements){
            toast.error("Stripe is not loaded")
            return
        }

        const cardElement = elements.getElement(CardElement)

        const { error, paymentIntent } = await stripe.confirmCardPayment(
            "{{CLIENT_SECRET}}",
            {
                payment_method: {
                    card: cardElement,
                }
            }
        )
        if(error){
            toast.error(error.message)
            setIsProcessing(false)
            return
        }

        try{
            await axiosSecure.post(`/api/payments`, {
                paymentIntentId: paymentIntent.id,
                parcelId
            })
            toast.success("Payment successful!")
            navigate(`/payment-success`)
        }catch(err){
            console.error(err)
            toast.error("Payment confirmation failed")
        }finally{
            setIsProcessing(false)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <CardElement className="border p-3 rounded">
            </CardElement>
            <button type="submit"
            disabled={!stripe || isProcessing}
            className="btn btn-primary"
            >
                {isProcessing ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
};

export default CheckoutForm;