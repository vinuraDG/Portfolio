import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaFacebook, FaGithub, FaMedium,
  FaMapMarkerAlt, FaPhone,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const inputStyle = {
  width: "100%",
  background: "var(--bg-card)",
  border: "1px solid var(--border-color)",
  borderRadius: "8px",
  padding: "12px 16px",
  outline: "none",
  color: "var(--text-primary)",
  fontSize: "14px",
};

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
    } catch {
      setResult("⚠️ Network error. Please check your connection.");
    }
  };

  const socialLinks = [
    { href: "https://github.com/vinuraDG", icon: FaGithub },
    { href: "https://www.linkedin.com/in/vinuradeelaka/", icon: FaLinkedin },
    { href: "https://web.facebook.com/vinura.deelaka.5/", icon: FaFacebook },
    { href: "https://medium.com/@vinuragamage123", icon: FaMedium },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Get In <span style={{ color: "var(--accent)" }}>Touch</span>
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-16"
          style={{ color: "var(--text-muted)" }}
        >
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Your Name
                </label>
                <input style={inputStyle} type="text" name="name" required />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Email Address
                </label>
                <input style={inputStyle} type="email" name="email" required />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Your Message
                </label>
                <textarea
                  style={{ ...inputStyle, height: "160px", resize: "vertical" }}
                  name="message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer text-white"
                style={{ background: "var(--accent)" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--accent-hover)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--accent)"}
              >
                Send Message
              </button>

              {result && (
                <p className="text-center mt-4" style={{ color: "var(--text-muted)" }}>
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                text: "205/A, Edandawila Watta, Wahala Kananke, Imaduwa, Galle, Sri Lanka.",
              },
              {
                icon: FaEnvelope,
                title: "Email",
                text: "vinuragamage123@gmail.com",
              },
              {
                icon: FaPhone,
                title: "Phone",
                text: "+94 76 548 1925",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start">
                <div className="text-2xl mr-4 mt-1" style={{ color: "var(--accent)" }}>
                  <Icon />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>{text}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      color: "var(--accent)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "var(--accent)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "var(--bg-card)";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;