import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { APIAuthenticated } from "../../http";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true); // To show loading while verifying payment
  const [paymentStatus, setPaymentStatus] = useState(""); // To track success or failure

  useEffect(() => {
    const verifyPayment = async () => {
      const pidx = searchParams.get("pidx");

      if (!pidx) {
        setPaymentStatus("Invalid payment response.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await APIAuthenticated.post(
          "/api/payment/verifypidx",
          { pidx }
        );
        
        console.log("Payment verification successful:", response.data);
        setPaymentStatus("Thank you for your donation!");
      } catch (error) {
        console.error("Payment verification failed:", error.response?.data || error.message);
        setPaymentStatus("Payment verification failed. Please contact support.");
      } finally {
        setIsLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="text-center p-8">
      {isLoading ? (
        <h2 className="text-white font-[Oswald]">Processing your payment...</h2>
      ) : (
        <h2 className="text-white font-[Oswald]">{paymentStatus}</h2>
      )}
    </div>
  );
};

export default PaymentSuccess;
