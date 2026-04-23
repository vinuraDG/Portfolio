import React from "react";

const Footer = () => {
  return (
    <div
      className="py-8"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container mx-auto px-6 text-center">
        <p style={{ color: "var(--text-muted)" }}>
          &copy; 2025 Created by Vinura Deelaka. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;