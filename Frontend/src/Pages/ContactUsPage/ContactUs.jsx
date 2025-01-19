import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white font-[Oswald]">
        <span className="text-pink-600">Contact Us</span>
      </h2>

      <div className="container mx-auto px-4 pb-6 font-[Oswald]">
        <p className="text-white text-lg text-center mb-6">
          We are always happy to hear from you! Whether you have a question, feedback, or need assistance, feel free to get in touch with us. We are committed to providing the best experience for you.
        </p>

        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Contact Information</h3>

          <div className="text-xl text-white mb-4">
            <p>
              <strong className="text-pink-600">Website:</strong>{" "}
              <a href="https://www.demoadoptpet.com" className="text-pink-600 hover:underline">
                www.yourwebsite.com
              </a>
            </p>
            <p>
              <strong className="text-pink-600">Email:</strong>{" "}
              <a href="mailto:info@adoptpet.com" className="text-pink-600 hover:underline">
                info@yourwebsite.com
              </a>
            </p>
          </div>

          {/* Social Media Links using Remix Icon */}
          <div className="flex justify-center space-x-8">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill text-3xl text-pink-600 hover:text-pink-400"></i>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line text-3xl text-pink-600 hover:text-pink-400"></i>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-fill text-3xl text-pink-600 hover:text-pink-400"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-x-line text-3xl text-pink-600 hover:text-pink-400"></i>
            </a>
          </div>
        </div>

        {/* New Section: Support */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Support</h3>
          <p className="text-xl text-white text-center mb-4">
            Need assistance? Our support team is here to help you with any issues.
          </p>
          <p className="text-white text-lg text-center">
            For urgent inquiries, please email us directly at{" "}
            <a href="mailto:support@yourwebsite.com" className="text-pink-600 hover:underline">
              support@yourwebsite.com
            </a>.
          </p>
        </div>

        {/* New Section: Map */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">Our Location</h3>
          <div className="w-full mb-4">
            {/* Embed a Google Map with height set to h-96 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451004.7189530381!2d82.03510050405055!3d27.97937979508941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997902bdbb35875%3A0x6d96ff2e6abc49bb!2sDang!5e0!3m2!1sen!2snp!4v1736850874525!5m2!1sen!2snp"
              width="600"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-96 w-full"
            ></iframe>
          </div>
          <p className="text-white text-lg text-center">
            We are located at the heart of the city. Visit us during office hours!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
