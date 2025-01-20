import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const AboutDeveloper = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-[Oswald]">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Meet the Developer
        </h2>

        <div className="max-w-sm mx-auto bg-gray-800 border border-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFHQFdQIDF__w/profile-displayphoto-shrink_400_400/B4DZRrLxaDHkAg-/0/1736965037442?e=1743033600&v=beta&t=q7YcKcSQkzJ7GjGUIQxtmcACTVhhuvoLmZe0zX6AMLE"
              alt="Developer"
              className="w-32 h-32 mx-auto rounded-full border-4 border-pink-600"
            />
            <h3 className="text-xl font-semibold text-pink-500 mt-4">
              Rajan Bhandari
            </h3>
            <p className="text-lg text-gray-400 mt-2">
              Full-stack Developer | Passionate about web development, AI, and
              software engineering.
            </p>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/razan-bhandari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600"
            >
              <FaLinkedin size={30} />
            </a>


            <a
              href="https://github.com/mickey4541"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600"
            >
              <FaGithub size={30} />
            </a>


            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600"
            >
              <FaTwitter size={30} />
            </a>


          </div>

          <div className="mt-6 text-white text-lg">
            <p>
              Hello! I'm <span className="text-pink-500">Rajan Bhandari</span>, a passionate full-stack developer who
              loves creating seamless web applications with a focus on clean and
              efficient code. I enjoy working with modern technologies like
              React, Node.js, and MongoDB, and I'm always exploring new tools
              and frameworks to improve my workflow.
            </p>
            <p className="mt-4">
              Feel free to connect with me through my social media profiles. I
              am always open to collaborations, new projects, and learning
              opportunities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutDeveloper;
