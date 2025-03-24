import React, { useState } from "react";
import axios from "axios";
import "./Newsletter.css";

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // Get the API URL from environment variables (fallback to local IP)
  const API_URL = import.meta.env.VITE_API_URL || "http://192.168.154.10:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/newsletter/submit/`, {
        email,
      });

      setStatusMessage("Email submitted successfully!");
      setEmail(""); // Reset email field
      setSubmitted(true); // Mark as submitted
    } catch (error) {
      setStatusMessage("There was an error submitting the form.");
    }
  };

  return (
    <>
      <div className="newsletter-container">
        <div className="newsletter-title">Sign Up for News & Events</div>
        <div className="newsletter-submit-container">
          <form className="email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`submit-btn ${submitted ? "submitted" : ""}`}
            >
              {!submitted ? (
                <svg
                  className="icon arrow-icon"
                  viewBox="0 -3 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#2b5482"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 12H15M15 12L12 9M15 12L12 15"
                    stroke="#2b5482"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="icon check-icon"
                  viewBox="0 -3 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#28a745"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 12L10 15L17 8"
                    stroke="#28a745"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>
        <div className="Newsletter-description-parent">
          {statusMessage && (
            <div className="status-message">{statusMessage}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Newsletter;
