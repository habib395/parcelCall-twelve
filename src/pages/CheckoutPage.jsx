import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/Form/CheckoutForm";
const stripePromise = loadStripe("import.meta.env.VITE_Payment_Gateway_PK")

const CheckoutPage = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const { data } = await axiosSecure.post('/createPaymentIntent', {
                    parcelId: id, // Pass the parcelId only
                });

                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Failed to create PaymentIntent:', error.message);
            }
        };

        createPaymentIntent();
    }, [id, axiosSecure]);

    const appearance = { theme: "stripe" };
    const options = { clientSecret, appearance };

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-2xl mb-5">Complete Your Payment</h2>
            {clientSecret ? (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm parcelId={id} />
                </Elements>
            ) : (
                <p>Loading payment details...</p>
            )}
        </div>
    );
};

export default CheckoutPage;
