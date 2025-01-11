import React from "react";
import CountUp from "react-countup";
import "./Scalar.css"; // Make sure to update CSS accordingly

function Scalar() {
  const stats = [
    { favicon: "🔹", number: 60, label: "Startups Mentored" },
    { favicon: "📈", number: 43, label: "Startups Incubated" },
    { favicon: "💰", number: 15, suffix: "L+", label: "Startup Funded" },
    { favicon: "💡", number: 5, label: "IPR Filed" },
    { favicon: "🎓", number: 16, label: "Social Startups Incubated" },
    { favicon: "📅", number: 80, label: "Events Organized" },
    { favicon: "🏢", number: 27, label: "Business Startups Incubated" },
    { favicon: "👩‍🎓", number: 8400, label: "Students Sensitized" },
  ];

  return (
    <div className="scalar-container">
      <h2>Our Innovation Impact</h2>
      <div className="scalar-stats">
        {stats.map((stat, index) => (
          <div key={index} className="scalar-item">
            <div className="favicon">{stat.favicon}</div>
            <CountUp
              className="count"
              end={stat.number}
              duration={4}
              suffix={stat.suffix || ""}
            />
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scalar;
