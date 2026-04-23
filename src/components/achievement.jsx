import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaMobileAlt, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("awards");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const certificates = [
    {
      title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      provider: "IBM", icon: "📱",
      link: "https://www.coursera.org/account/accomplishments/verify/INX2RZASBFQX",
    },
    {
      title: "Machine Learning with Python",
      provider: "IBM", icon: "📊",
      link: "https://www.coursera.org/account/accomplishments/verify/WB45O7F6VP8S",
    },
    {
      title: "Python for Data Science, AI & Development",
      provider: "IBM", icon: "🐍",
      link: "https://www.coursera.org/account/accomplishments/verify/03VCE0CEQFPE",
    },
    {
      title: "Developing Front-End Apps with React",
      provider: "IBM", icon: "⚛️",
      link: "https://www.coursera.org/account/accomplishments/verify/IXPVAN24ERNS",
    },
    {
      title: "Developing AI Applications with Python and Flask",
      provider: "IBM", icon: "🤖",
      link: "https://www.coursera.org/account/accomplishments/verify/FEVTOIQDZ42I",
    },
    {
      title: "Getting Started with Git and GitHub",
      provider: "IBM", icon: "🔧",
      link: "https://www.coursera.org/account/accomplishments/verify/ZVK9EU11A8EQ",
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      provider: "IBM", icon: "💻",
      link: "https://www.coursera.org/account/accomplishments/verify/DG8SXGBE6KPX",
    },
  ];

  const tabBase = {
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s",
  };

  const tabActive = {
    ...tabBase,
    background: "var(--accent)",
    color: "#fff",
    boxShadow: "0 4px 20px var(--accent-glow)",
  };

  const tabInactive = {
    ...tabBase,
    background: "var(--bg-card)",
    color: "var(--text-muted)",
    border: "1px solid var(--border-color)",
  };

  return (
    <section
      id="achievements"
      className="py-20 px-8"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            My <span style={{ color: "var(--accent)" }}>Achievements</span>
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Recognition and awards for innovation and excellence
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("awards")}
              style={activeTab === "awards" ? tabActive : tabInactive}
            >
              <FaTrophy className="inline mr-2" /> Awards
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              style={activeTab === "certificates" ? tabActive : tabInactive}
            >
              <FaCertificate className="inline mr-2" /> Certificates
            </button>
          </div>
        </motion.div>

        {/* Awards */}
        {activeTab === "awards" && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
            }}
          >
            {/* Header bar */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8">
              <div className="flex items-center gap-4 mb-4">
                <FaTrophy className="text-yellow-400 text-5xl" />
                <div>
                  <h3 className="text-3xl font-bold text-white">MatchMate LK</h3>
                  <p className="text-blue-100">YouthSpark 2025 – ICAS Conference</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl p-6 flex items-start gap-4"
                  style={{
                    background: "rgba(234,179,8,0.06)",
                    border: "1px solid rgba(234,179,8,0.25)",
                  }}
                >
                  <FaAward className="text-yellow-400 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h4
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      People's Choice Award
                    </h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                      Voted by the community
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl p-6 flex items-start gap-4"
                  style={{
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-glow)",
                  }}
                >
                  <FaMobileAlt
                    className="text-3xl flex-shrink-0 mt-1"
                    style={{ color: "var(--accent)" }}
                  />
                  <div>
                    <h4
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Most Promising Technology Award
                    </h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                      Innovation in sports tech
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* About Project */}
              <div className="mb-8">
                <h4
                  className="text-2xl font-semibold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  About the Project
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.75" }}>
                  A revolutionary mobile app for football in Sri Lanka that bridges the gap in sports management.
                  MatchMate LK provides a verified, mobile-based scheduling and record-keeping platform,
                  transforming how football is organized and tracked across the country.
                </p>
              </div>

              {/* Event Details */}
              <div
                className="pt-6"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--accent)" }}>Event: </span>
                  2nd International Conference on Applied Sports (ICAS)
                </p>
                <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--accent)" }}>Organized by: </span>
                  Department of Sports Sciences and Physical Education,
                  Faculty of Applied Sciences, Sabaragamuwa University of Sri Lanka
                </p>
              </div>

              {/* Team Members */}
              <div className="mt-8">
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Team Members
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Vinura Deelaka", "Mahima Weerapperuma", "Maleesha Akash", "Ama Gavesh", "Ashani Imesha"].map(
                    (member, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full text-sm"
                        style={{
                          background: "var(--accent-soft)",
                          border: "1px solid var(--accent-glow)",
                          color: "var(--accent)",
                        }}
                      >
                        {member}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Certificates */}
        {activeTab === "certificates" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-xl p-6 transition-all duration-300 shadow-lg block"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
                  textDecoration: "none",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-color)"}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3
                  className="text-lg font-semibold mb-3 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.title}
                </h3>
                <div
                  className="flex items-center justify-between mt-4 pt-4"
                  style={{ borderTop: "1px solid var(--border-color)" }}
                >
                  <div className="flex items-center gap-2">
                    <FaCertificate style={{ color: "var(--accent)" }} />
                    <span className="font-semibold" style={{ color: "var(--accent)" }}>
                      {cert.provider}
                    </span>
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    View →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements;