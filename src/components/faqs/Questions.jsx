import React, { useState } from "react";

const Questions = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-card px-4 py-5 w-auto h-auto transition-all">
      <header className="flex justify-between items-center w-full">
        <h3 className="text-xl font-medium">{question.title}</h3>
        <button className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            onClick={() => setIsOpen(!isOpen)}
            className={`ease transition-all delay-75 hover:stroke-soft-red stroke-soft-blue cursor-pointer ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
          </svg>
        </button>
      </header>
      <div className={`py-8 ${isOpen ? "block" : "hidden"}`}>
        <p className="text-lg font-medium text-gray-700">{question.answer}</p>
      </div>
    </div>
  );
};

export default Questions;
