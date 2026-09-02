import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaAward, FaMobileAlt, FaCertificate, FaScroll, FaMedal, FaUsers, FaCalendarAlt, FaUniversity, FaTag } from "react-icons/fa";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("awards");

  const certificates = [
    { title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps", provider: "IBM", icon: "📱", link: "https://www.coursera.org/account/accomplishments/verify/INX2RZASBFQX" },
    { title: "Machine Learning with Python", provider: "IBM", icon: "📊", link: "https://www.coursera.org/account/accomplishments/verify/WB45O7F6VP8S" },
    { title: "Python for Data Science, AI & Development", provider: "IBM", icon: "🐍", link: "https://www.coursera.org/account/accomplishments/verify/03VCE0CEQFPE" },
    { title: "Developing Front-End Apps with React", provider: "IBM", icon: "⚛️", link: "https://www.coursera.org/account/accomplishments/verify/IXPVAN24ERNS" },
    { title: "Developing AI Applications with Python and Flask", provider: "IBM", icon: "🤖", link: "https://www.coursera.org/account/accomplishments/verify/FEVTOIQDZ42I" },
    { title: "Getting Started with Git and GitHub", provider: "IBM", icon: "🔧", link: "https://www.coursera.org/account/accomplishments/verify/ZVK9EU11A8EQ" },
    { title: "Hands-on Introduction to Linux Commands and Shell Scripting", provider: "IBM", icon: "💻", link: "https://www.coursera.org/account/accomplishments/verify/DG8SXGBE6KPX" },
  ];

  const tabs = [
    { id: "awards", label: "Awards", icon: <FaTrophy /> },
    { id: "publications", label: "Publications", icon: <FaScroll /> },
    { id: "certificates", label: "Certificates", icon: <FaCertificate /> },
  ];

  const tabBase = {
    display: "flex", alignItems: "center", gap: "8px",
    padding: "10px 22px", borderRadius: "50px", fontWeight: 600,
    cursor: "pointer", border: "none", transition: "all 0.3s", fontSize: "14px",
  };
  const tabActive = { ...tabBase, background: "var(--accent)", color: "#fff", boxShadow: "0 4px 20px var(--accent-glow)" };
  const tabInactive = { ...tabBase, background: "transparent", color: "var(--text-muted)", border: "1px solid var(--border-color)" };

  const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } };

  return (
    <section id="achievements" className="py-20 px-8">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            My <span style={{ color: "var(--accent)" }}>Achievements</span>
          </h2>
          <p style={{ color: "var(--text-muted)" }}>Recognition, research, and certifications</p>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={activeTab === t.id ? tabActive : tabInactive}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* ── AWARDS ── */}
          {activeTab === "awards" && (
            <motion.div key="awards" {...fadeUp} className="flex flex-col gap-6">

              {/* Best Presenter */}
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)" }}>
                <div className="flex items-center gap-4 p-6" style={{ borderBottom: "3px solid #ca8a04", background: "rgba(202,138,4,0.07)" }}>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: "rgba(202,138,4,0.15)", border: "2px solid #ca8a04" }}>
                    🥇
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(202,138,4,0.2)", color: "#ca8a04" }}>AWARD</span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>11 Aug 2026</span>
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Best Presenter — 1st Place</h3>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>Final Year Research Project Presentation · B.Sc. (Hons) Computer Science &amp; Technology</p>
                  </div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
                    <FaUniversity className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <span>Dept. of Physical Sciences &amp; Technology, Faculty of Applied Sciences, Sabaragamuwa University of Sri Lanka</span>
                  </div>
                  <div className="flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
                    <FaTag className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <span>Recognised for outstanding presentation of final-year research project</span>
                  </div>
                </div>
              </div>

              {/* MatchMate LK */}
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)" }}>
                <div className="flex items-center gap-4 p-6" style={{ borderBottom: "3px solid var(--accent)", background: "var(--accent-soft)" }}>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: "var(--accent-soft)", border: "2px solid var(--accent)" }}>
                    🏆
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent-glow)" }}>DUAL AWARD</span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>YouthSpark 2025</span>
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>MatchMate LK</h3>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>2nd International Conference on Applied Sports (ICAS)</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.25)" }}>
                      <FaAward className="text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>People's Choice Award</p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Voted by the community</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-glow)" }}>
                      <FaMobileAlt className="text-xl flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Most Promising Technology</p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Innovation in sports tech</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mb-4" style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
                    A mobile platform for football in Sri Lanka providing verified scheduling and record-keeping, transforming how football is organised and tracked across the country.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Vinura Deelaka", "Mahima Weerapperuma", "Maleesha Akash", "Ama Gavesh", "Ashani Imesha"].map((m, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full" style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-glow)", color: "var(--accent)" }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* ── PUBLICATIONS ── */}
          {activeTab === "publications" && (
            <motion.div key="publications" {...fadeUp}>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)" }}>
                <div className="flex items-center gap-4 p-6" style={{ borderBottom: "3px solid #0d9488", background: "rgba(13,148,136,0.07)" }}>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: "rgba(13,148,136,0.15)", border: "2px solid #0d9488" }}>
                    📄
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(13,148,136,0.2)", color: "#0d9488" }}>RESEARCH PAPER · POSTER</span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>19 Aug 2026</span>
                    </div>
                    <h3 className="text-xl font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                      TealLink: A Mobile Platform for Digital Tea Harvest Management in Sri Lanka
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm mb-6" style={{ color: "var(--text-muted)", lineHeight: "1.75" }}>
                    Introduces TealLink — a Flutter &amp; cloud-based mobile platform that digitises tea harvest management. The system delivers GPS-verified harvest logging, automated weight verification, anomaly detection, bilingual (Sinhala/English) dashboards, and role-based workflows connecting landowners, collectors, and administrators on a single platform.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
                      <FaUsers className="mt-0.5 flex-shrink-0" style={{ color: "#0d9488" }} />
                      <div>
                        <span className="font-semibold block mb-0.5" style={{ color: "var(--text-primary)" }}>Authors</span>
                        D.G.V. Deelaka, A.A.R.D. Perera
                      </div>
                    </div>
                    <div className="flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
                      <FaCalendarAlt className="mt-0.5 flex-shrink-0" style={{ color: "#0d9488" }} />
                      <div>
                        <span className="font-semibold block mb-0.5" style={{ color: "var(--text-primary)" }}>Conference</span>
                        ICAPS-SUSL 2026
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:col-span-2" style={{ color: "var(--text-muted)" }}>
                      <FaUniversity className="mt-0.5 flex-shrink-0" style={{ color: "#0d9488" }} />
                      <div>
                        <span className="font-semibold block mb-0.5" style={{ color: "var(--text-primary)" }}>Organized by</span>
                        International Conference on Applied and Physical Sciences · Dept. of Physical Sciences &amp; Technology, Faculty of Applied Sciences, Sabaragamuwa University of Sri Lanka
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Flutter", "Cloud Computing", "GPS Tracking", "Mobile App", "Agriculture", "Sri Lanka"].map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.3)", color: "#0d9488" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── CERTIFICATES ── */}
          {activeTab === "certificates" && (
            <motion.div key="certificates" {...fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certificates.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="rounded-xl p-5 flex flex-col shadow-md"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)", textDecoration: "none", transition: "border-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-color)"}
                >
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <h3 className="text-sm font-semibold leading-snug flex-1" style={{ color: "var(--text-primary)" }}>{cert.title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
                    <div className="flex items-center gap-2">
                      <FaCertificate style={{ color: "var(--accent)" }} />
                      <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{cert.provider}</span>
                    </div>
                    <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>View →</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;