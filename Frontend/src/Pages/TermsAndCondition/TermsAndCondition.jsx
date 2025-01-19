import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <>
      <Navbar />



      <div className="container mx-auto px-4 pb-6 font-[Oswald]">
        <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white">
          <span className="text-pink-600">Terms and Conditions</span>
        </h2>
        <p className="text-white text-lg text-center mb-6">
          Please read these Terms and Conditions carefully before using our Pet Adoption Website.
        </p>




        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Introduction</h3>
          <p className="text-lg">
            These Terms and Conditions govern the use of our website and services provided by adoptpet. By accessing or using our site, you agree to comply with these Terms. If you do not agree with any of these terms, please refrain from using our services.
          </p>
        </div>




        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Use of Website</h3>
          <p className="text-lg">
            You may only use our website and services for lawful purposes and in accordance with these Terms. You agree not to use our site:
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li>In any way that violates any applicable local, national, or international law or regulation.</li>
            <li>To transmit or distribute harmful, defamatory, or offensive material.</li>
            <li>For any fraudulent, illegal, or unethical activities.</li>
          </ul>
        </div>




        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Account Registration and Security</h3>
          <p className="text-lg">
            When you create an account on our website, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account and password. If you suspect any unauthorized access or use of your account, you must notify us immediately.
          </p>
        </div>





        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Pet Adoption Process</h3>
          <p className="text-lg">
            Our website facilitates the adoption of pets. The following conditions apply to the adoption process:
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li>All pets listed for adoption are subject to availability and adoption terms.</li>
            <li>By submitting an adoption request, you confirm that you meet the adoption criteria set by our website and have the necessary resources to care for the adopted pet.</li>
            <li>We reserve the right to reject any adoption application at our sole discretion.</li>
            <li>Adoption fees, if applicable, must be paid in full before the pet is released to the adopter.</li>
          </ul>
        </div>





        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Payment Terms</h3>
          <p className="text-lg">
            For any applicable pet adoption fees, payment must be made through the approved payment methods on our website. All payments are processed securely, and by using our site, you agree to the terms of the payment provider.
          </p>
        </div>




        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Intellectual Property</h3>
          <p className="text-lg">
            All content on the website, including but not limited to text, images, logos, and graphics, is owned by adpotpet or licensed to us. You are granted a limited, non-exclusive, non-transferable license to use the website for personal, non-commercial use only.
          </p>
        </div>





        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Limitation of Liability</h3>
          <p className="text-lg">
            In no event shall adoptpet, its affiliates, or its employees be liable for any direct, indirect, incidental, special, or consequential damages arising from your use or inability to use the website or services, even if we have been advised of the possibility of such damages.
          </p>
        </div>




        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Termination</h3>
          <p className="text-lg">
            We may suspend or terminate your account at any time, without notice, for any reason, including if you violate these Terms and Conditions.
          </p>
        </div>




        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Governing Law</h3>
          <p className="text-lg">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of nepal, without regard to its conflict of law principles.
          </p>
        </div>





        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Changes to Terms and Conditions</h3>
          <p className="text-lg">
            We may update these Terms and Conditions from time to time. Any changes will be posted on this page with the updated date. Please review this page periodically for any modifications.
          </p>
        </div>




        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Contact Us</h3>
          <p className="text-lg">
            If you have any questions or concerns about these Terms and Conditions, please contact us at:
          </p>
          <p className="text-lg">
            <strong>Email:</strong><br />
            <Link to="mailto:terms@adpotpet.com" className="text-pink-600 hover:underline">
              terms@adoptpet.com
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndCondition;
