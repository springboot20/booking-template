import React from "react";
import Questions from "./Questions";

const faqQuestions = [
  {
    title: "What is Bookmarked?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    answer:
      "  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    answer:
      " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Seds ollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const FrequentlyQuestions = () => {
  return (
    <section className="relative xl:h-screen">
      <div className="grid grid-cols-1 mx-auto max-w-7xl place-items-center place-content-center xl:h-full gap-8">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-center text-3xl sm:text-5xl mb-4 font-semibold text-very-dark-blue">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-lg font-normal text-gray-500">
            Here are some of our FAQs. If you have any other questions you’d like answer please feel
            free to email us.
          </p>
        </article>
        <article className="grid grid-cols-1 gap-6 w-full max-w-7xl px-5 mt-4">
          {faqQuestions.map((faq) => (
            <Questions key={faq.title} question={faq} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
