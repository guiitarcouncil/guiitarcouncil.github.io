import React, { useState } from "react";

import "./Newsletter.css";

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail(""); // Reset input field
    }, 2000);
  };
  return (
    <>
      <div className="newsletter-container">
        <div className="newsletter-title">Sign Up for News & Events</div>
        <div className="newsletter-submit-container">
          <form
            action=""
            method="post"
            className="email-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
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
          
        </div>
      </div>
    </>
  );
}

export default Newsletter;
