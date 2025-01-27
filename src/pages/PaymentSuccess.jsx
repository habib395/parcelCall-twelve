import ConfettiExplosion from "react-confetti-explosion";
const PaymentSuccess = () => {
    return (
        <div className='container mx-auto text-center py-20'>
            <h2 className='text-3xl font-bold mb-5'>Payment successful!</h2>
            <ConfettiExplosion></ConfettiExplosion>
            <p className='text-lg'> Thank you for your payment.TYour parcel is being processes!</p>
        </div>
    );
};

export default PaymentSuccess;