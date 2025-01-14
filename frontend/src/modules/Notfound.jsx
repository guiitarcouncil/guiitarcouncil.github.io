import React from "react";
import "./Notfound.css";

function NotFound() {
  return (
    <main className="error-page">
      <div className="container">
       
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil"></div>
          </div>
          <div className="eye">
            <div className="eye__pupil"></div>
          </div>
        </div>

        
        <div className="error-page__heading">
          <h1 className="error-page__heading-title">Looks like you're lost</h1>
          <p className="error-page__heading-desciption">Error Code: 404 </p>
        </div>

       
        <button
          className="error-page__button"
          onClick={() => window.location.href = "/"}
          aria-label="Back to Home"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}

export default NotFound;
