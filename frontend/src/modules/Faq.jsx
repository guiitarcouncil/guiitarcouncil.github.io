import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Faq.css";

const faqs = [
  { question: "Question 1?", answer: "Answer 1." },
  { question: "Question 2?", answer: "Answer 2." },
  { question: "Question 3?", answer: "Answer 3." },
  { question: "Question 4?", answer: "Answer 4." },
  { question: "Question 5?", answer: "Answer 5." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
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
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
