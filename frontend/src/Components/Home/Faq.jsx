import "./Faq.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the GUIITAR Council?",
    answer: "The GUIITAR Council (Section 8 Company) is the incubation center of GSFC University, supporting students, faculty, startups, and entrepreneurs in innovation, entrepreneurship, and business development."
  },
  {
    question: "Who can apply for incubation support at GUIITAR Council?",
    answer: "Students, alumni, faculty, researchers, and external entrepreneurs with innovative startup ideas can apply for incubation support."
  },
  {
    question: "Where is the GUIITAR Council located?",
    answer: "The GUIITAR Council operates at GSFC University, Vadodara, Gujarat."
  },
  {
    question: "What support does the GUIITAR Council offer to startups?",
    answer: "We provide:\n- Mentorship and business guidance\n- Funding support through SSIP 2.0 and Nodal Institute, GoG\n- Co-working space and prototyping lab access\n- Networking opportunities with investors and industry experts\n- Intellectual Property Protection"
  },
  {
    question: "How can I apply for incubation support?",
    answer: "You can apply through the GUIITAR Council website by filling out the Apply Now form or visiting our office at GSFC University or https://bit.ly/guiitar."
  },
  {
    question: "Does the GUIITAR Council provide funding support?",
    answer: "Yes, we offer funding through Student Startup and Innovation Policy (SSIP 2.0) and Nodal Institute Scheme 'Assistance for Startups/Innovation, Gujarat Industrial Policy – 2020'."
  },
  {
    question: "What are the eligibility criteria for funding support?",
    answer: "- The idea must be innovative and have commercialization potential.\n- SSIP 2.0: Up to 2.50 lakhs seed support\n  - Any person up to the age of 35 years, who is a school student of Foundational/Preparatory/Middle/Secondary level (Up to Class 12), a Diploma/Vocational/Undergraduate/Postgraduate/Doctoral student or an alumna/alumnus, or any dropout from School/Institute/University\n- Nodal Institute: Up to Rs. 30.00 lakhs seed support\n  - Startups must be registered as Partnership / LLP / Private Company and Registered Office Certificate (ROC) must be of Gujarat.\n  - Startup/Innovator cannot be the promoter or significant (>10%) shareholder/beneficiary of another company/startup at the time of applying for and receiving the approval for the assistance.\n  - Preference shall be given for product/process/service-based innovation with intellectual property and unique product/service/business model with significant commercial potential."
  },
  {
    question: "Does the GUIITAR Council organize events for startups?",
    answer: "Yes, we regularly organize My Startup Story, Demo Day, Hackathons, Investor meetups, and expert talks to support startups."
  },
  {
    question: "How can I participate in startup events and workshops?",
    answer: "Keep an eye on our website and social media pages for upcoming events."
  },
  {
    question: "Can external startups or entrepreneurs use GUIITAR Council facilities?",
    answer: "Yes, external startups can apply for incubation or utilize specific services based on availability and approval."
  },
  {
    question: "What is the incubation duration at the GUIITAR Council?",
    answer: "36 Months"
  },
  {
    question: "Is there any cost to join the incubation program?",
    answer: "It is Free."
  },
  {
    question: "How can I contact the GUIITAR Council for more information?",
    answer: "You can reach us via:\n- Email: guiitar@gsfcuniversity.ac.in\n- Phone: 9313262712 (10:00 AM to 05:00 PM)\n- Visit: 2nd Floor, Event Room, Anviksha, GUIITAR Council, GSFC University, P.O. Fertilizernagar, Vadodara – 391750, Gujarat, INDIA"
  },
  {
    question: "Can I collaborate with the GUIITAR Council as an investor or mentor or service provider?",
    answer: "Yes, we welcome industry experts, investors, mentors, and service providers to collaborate with us. Write an email to us for collaboration or visit."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container-parent">
      <center>
        <p style={{ fontSize: "50px", color: "var(--primary-color)" }}>FAQs</p>
      </center>
      <div className="faq-container-child">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : "hide"}`}>
              {faq.answer.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}