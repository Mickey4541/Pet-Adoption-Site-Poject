import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API } from "../../http";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();


  useEffect(() => {
    const verifyPayment = async () => {
      const pidx = searchParams.get("pidx");
      const paymentId = searchParams.get("paymentId");


      if (pidx && paymentId) {
        try {
          const response = await API.post(
            `/payment/verifypidx?paymentId=${paymentId}`,
            { pidx },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log("Payment verification successful:", response.data);
          alert("Thank you for your donation!");
        } catch (error) {
          console.error("Payment verification failed:", error.response?.data || error.message);
          alert("Payment verification failed. Please contact support.");
        }
      } else {
        alert("Invalid payment response.");
      }
    };


    
    verifyPayment();
  }, [searchParams]);



  return (
    <div className="text-center p-8">
      <h2 className="text-white font-[Oswald]">Processing your payment...</h2>
    </div>
  );
};

export default PaymentSuccess;
