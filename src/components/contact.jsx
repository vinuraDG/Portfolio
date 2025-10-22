import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "61218b76-e9cc-4d4d-90da-8f776b9f9462");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("⚠️ Network error. Please check your connection.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-black/20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Get In <span className="text-blue-700">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  className="w-full bg-gray-700 border border-black/20 rounded-lg px-4 py-3 outline-none text-white"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full bg-gray-700 border border-black/20 rounded-lg px-4 py-3 outline-none text-white"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 bg-gray-700 border border-black/20 rounded-lg px-4 py-3 outline-none text-white"
                  name="message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-700 rounded-lg font-medium hover:bg-blue-800 transition duration-300 cursor-pointer text-white"
              >
                Send Message
              </button>

              {/* Status Message */}
              {result && (
                <p className="text-center mt-4 text-gray-300">{result}</p>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-blue-700 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Location
                </h3>
                <p className="text-gray-400">
                  205/A, Edandawila Watta, Wahala Kananke, Imaduwa,Galle,Sri Lanka.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-700 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-400">vinuragamage123@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-700 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
                <p className="text-gray-400">+94 76 548 1925</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/vinuraDG"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/vinuradeelaka/"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
