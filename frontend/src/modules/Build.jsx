import React from "react";
import { Link } from "react-router-dom";
import moneyIcon from "../assets/money.png";
import urbanIcon from "../assets/urban.png";
import communityIcon from "../assets/community.png";
import brainIcon from "../assets/brain.png";

const Build = () => {
  return (
    <section className="bg-blue text-gray-800 text-center py-16 px-5">
      <h1 className="text-4xl font-bold text-secondary mb-8 underline">
        Build the future with us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
          <img src={moneyIcon} alt="Funding" className="h-16 w-16 mx-auto mb-3" />
          <h2 className="text-2xl text-primary font-semibold mb-2">Funding</h2>
          <p className="text-gray-600 text-base">Get access to financial support to turn your innovative ideas into reality.</p>
          <Link to="/funding">
            <button className="mt-4 px-4 py-2 bg-primary text-secondary font-bold rounded hover:bg-secondary hover:text-primary transition">
              Learn More
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
          <img src={urbanIcon} alt="Infrastructure" className="h-16 w-16 mx-auto mb-3" />
          <h2 className="text-2xl text-primary font-semibold mb-2">Infrastructure</h2>
          <p className="text-gray-600 text-base">Work in state-of-the-art facilities designed for collaboration and growth.</p>
          <Link to="/resources">
            <button className="mt-4 px-4 py-2 bg-primary text-secondary font-bold rounded hover:bg-secondary hover:text-primary transition">
              Learn More
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
          <img src={communityIcon} alt="Mentorship" className="h-16 w-16 mx-auto mb-3" />
          <h2 className="text-2xl text-primary font-semibold mb-2">Mentorship</h2>
          <p className="text-gray-600 text-base">Learn from leading industry experts to sharpen your strategies and skills.</p>
          <Link to="/about">
            <button className="mt-4 px-4 py-2 bg-primary text-secondary font-bold rounded hover:bg-secondary hover:text-primary transition">
              Learn More
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
          <img src={brainIcon} alt="IPR Support" className="h-16 w-16 mx-auto mb-3" />
          <h2 className="text-2xl text-primary font-semibold mb-2">IPR Support</h2>
          <p className="text-gray-600 text-base">Protect your ideas and innovations with intellectual property rights assistance.</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0zfawCS7M_Q-uOzlA87ARxNCCx-wNUXAAx_54RAORIF_w6g/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-4 py-2 bg-primary text-secondary font-bold rounded hover:bg-secondary hover:text-primary transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-secondary mb-4">
          Take the first step towards greatness!
        </h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 text-xl font-bold text-primary bg-white rounded shadow-md hover:shadow-lg transition">
            Apply Now!
          </button>
        </a>
      </div>
    </section>
  );
};

export default Build;
