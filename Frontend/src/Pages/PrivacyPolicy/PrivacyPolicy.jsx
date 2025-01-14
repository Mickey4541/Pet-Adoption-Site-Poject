import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />



      
      <div className="container mx-auto px-4 pb-6">
        <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white">
          <span className="text-pink-600">Privacy Policy</span>
        </h2>
        <p className="text-white text-lg text-center mb-6">
          Your privacy is important to us. This Privacy Policy outlines the types of information we collect and how we use, share, and protect it.
        </p>





        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Introduction</h3>
          <p className="text-lg">
            Welcome to our Pet Adoption Website! This Privacy Policy explains how we collect, use, and protect the personal information you provide to us while using our services. By using our website, you agree to the practices outlined in this policy.
          </p>
        </div>






        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Information We Collect</h3>
          <p className="text-lg">
            We collect the following types of information to provide and improve our services:
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li><strong>Personal Information:</strong> When you register or inquire about adopting a pet, we may collect your name, email address, phone number, and address.</li>
            <li><strong>Pet Adoption Information:</strong> Information about the pets you are interested in or the pets you adopt, including pet names, breed, age, and adoption status.</li>
            <li><strong>Payment Information:</strong> For transactions related to pet adoption, we may collect payment information, such as credit card details, billing address, and payment method.</li>
            <li><strong>Website Usage Data:</strong> We collect data about your interactions with our website, such as your IP address, browser type, and pages you visit.</li>
          </ul>
        </div>





        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">How We Use Your Information</h3>
          <p className="text-lg">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li><strong>To Provide Services:</strong> To process your pet adoption requests, respond to inquiries, and facilitate transactions.</li>
            <li><strong>To Improve Our Website:</strong> To understand how our website is used and enhance the user experience.</li>
            <li><strong>To Communicate with You:</strong> To send updates, promotions, and important notifications regarding your account or our services.</li>
            <li><strong>For Legal and Security Purposes:</strong> To comply with legal obligations, prevent fraud, and protect our website and users.</li>
          </ul>
        </div>





        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Sharing Your Information</h3>
          <p className="text-lg">
            We do not sell, rent, or trade your personal information. However, we may share your information in the following situations:
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li><strong>With Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website or providing services.</li>
            <li><strong>For Legal Requirements:</strong> We may share your information when required by law or to protect our rights or safety.</li>
          </ul>
        </div>






        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Data Security</h3>
          <p className="text-lg">
            We take reasonable precautions to protect your personal information. While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>






        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Your Rights</h3>
          <p className="text-lg">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You can update or correct any inaccurate information.</li>
            <li><strong>Deletion:</strong> You can request the deletion of your personal data, subject to certain exceptions.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of marketing communications at any time.</li>
          </ul>
        </div>






        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Changes to This Privacy Policy</h3>
          <p className="text-lg">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. Please review this policy periodically.
          </p>
        </div>






        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Contact Us</h3>
          <p className="text-lg">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-lg">
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@yourwebsite.com" className="text-pink-600 hover:underline">
              privacy@adpotpet.com
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
