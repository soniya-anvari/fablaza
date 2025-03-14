import React, { useState } from "react";

import faqs from "../../constant/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-[700px]  py-10 px-8 shadow-xl rounded-2xl border-[1px] border-[#0000003c]">
      <h2 className="text-2xl font-Iran_Bold text-clamp_intro text-center text-black mb-6">
        سوالات متداول
      </h2>
      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="my-10">
          <h3 className="text-clamp font-Iran_Bold text-purple_d mb-8">
            {section.category}
          </h3>
          <div className="space-y-4">
            {section.questions.map((faq, index) => (
              <div key={index} className="border-b border-purple_l pb-3">
                <button
                  className="flex justify-between items-center w-full text-lg font-medium text-black focus:outline-none"
                  onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
                >
                  {faq.question}
                  <span className="text-purple_d text-[20px]">
                    {openIndex === `${sectionIndex}-${index}` ? "−" : "+"}
                  </span>
                </button>
                {openIndex === `${sectionIndex}-${index}` && (
                  <div className="mt-5 text-black px-3 text-clamp">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
