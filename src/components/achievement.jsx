import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaMobileAlt, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("awards");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const certificates = [
    {
      title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      provider: "IBM",
      icon: "📱",
      link: "https://www.coursera.org/account/accomplishments/verify/INX2RZASBFQX"
    },
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      icon: "📊",
      link: "https://www.coursera.org/account/accomplishments/verify/WB45O7F6VP8S"
    }
    ,
    {
      title: "Python for Data Science, AI & Development",
      provider: "IBM",
      icon: "🐍",
      link: "https://www.coursera.org/account/accomplishments/verify/03VCE0CEQFPE"
    },
    {
      title: "Developing Front-End Apps with React",
      provider: "IBM",
      icon: "⚛️",
      link: "https://www.coursera.org/account/accomplishments/verify/IXPVAN24ERNS"
    },
    {
      title: "Developing AI Applications with Python and Flask",
      provider: "IBM",
      icon: "🤖",
      link: "https://www.coursera.org/account/accomplishments/verify/FEVTOIQDZ42I"
    },
    {
      title: "Getting Started with Git and GitHub",
      provider: "IBM",
      icon: "🔧",
      link: "https://www.coursera.org/account/accomplishments/verify/ZVK9EU11A8EQ"
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      provider: "IBM",
      icon: "💻",
      link: "https://www.coursera.org/account/accomplishments/verify/DG8SXGBE6KPX"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black/20 px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            My <span className="text-blue-700">Achievements</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            Recognition and awards for innovation and excellence
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("awards")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === "awards"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
            >
              <FaTrophy className="inline mr-2" />
              Awards
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === "certificates"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
            >
              <FaCertificate className="inline mr-2" />
              Certificates
            </button>
          </div>
        </motion.div>

        {/* Awards Section */}
        {activeTab === "awards" && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
          >
            {/* Header */}
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
              {/* Awards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-6 flex items-start gap-4"
                >
                  <FaAward className="text-yellow-400 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">People's Choice Award</h4>
                    <p className="text-gray-300 text-sm">Voted by the community</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-6 flex items-start gap-4"
                >
                  <FaMobileAlt className="text-blue-400 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Most Promising Technology Award</h4>
                    <p className="text-gray-300 text-sm">Innovation in sports tech</p>
                  </div>
                </motion.div>
              </div>

              {/* About Project */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-white mb-4">About the Project</h4>
                <p className="text-gray-300 leading-relaxed">
                  A revolutionary mobile app for football in Sri Lanka that bridges the gap in sports management.
                  MatchMate LK provides a verified, mobile-based scheduling and record-keeping platform,
                  transforming how football is organized and tracked across the country.
                </p>
              </div>

              {/* Event Details */}
              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-blue-400">Event:</span> 2nd International Conference on Applied Sports (ICAS)
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="font-semibold text-blue-400">Organized by:</span> Department of Sports Sciences and Physical Education,
                  Faculty of Applied Sciences, Sabaragamuwa University of Sri Lanka
                </p>
              </div>

              {/* Team Members */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Team Members</h4>
                <div className="flex flex-wrap gap-3">
                  {["Vinura Deelaka", "Mahima Weerapperuma", "Maleesha Akash", "Ama Gavesh", "Ashani Imesha"].map((member, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Certificates Section */}
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 cursor-pointer block"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <FaCertificate className="text-blue-400" />
                    <span className="text-blue-300 font-semibold">{cert.provider}</span>
                  </div>
                  <span className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
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