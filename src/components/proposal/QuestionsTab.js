import React from "react";

function QuestionsTab({ questions }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Client Clarifications</h2>
      {questions?.map((question, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">Question: {question.question}</h3>
          <p className="text-sm text-gray-600">Assumption: {question.assumption}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionsTab;