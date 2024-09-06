import React from "react";

const questions = [
  { question: "Question 1?", assumption: "Assumption for question 1" },
  { question: "Question 2?", assumption: "Assumption for question 2" },
  { question: "Question 3?", assumption: "Assumption for question 3" },
];

function QuestionsTab() {
  return (
    <div className="mt-8">
      <ul className="divide-y divide-tertiary">
        {questions.map((item, index) => (
          <li key={index} className="py-4">
            <div className="flex space-x-3">
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-medium text-secondary">{item.question}</h3>
                <p className="text-sm text-quaternary">{item.assumption}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsTab;