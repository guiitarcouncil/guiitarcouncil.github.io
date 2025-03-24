import "./Scalar.css"; 
import React from "react";

function Scalar() {
  const stats = [
    { number: "100+", label: "Startups Mentored" },
    { number: 450, label: "Startups Incubated" },
    { number: 50, suffix: "L+", label: "Startup Funded" },
    { number: 15, label: "IPR Filed" },
    { number: "10,000", label: "Students Sensitized" },
  ];

  return (
    <div className="scalar-container">
      <h2>We Deliver Results</h2>
      <div className="scalar-stats">
        {stats.map((stat, index) => (
          <div key={index} className="scalar-item">
            <div className="count">{stat.number}</div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scalar;