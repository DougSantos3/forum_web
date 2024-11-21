// QuestionCard: Um cartão para exibir informações resumidas sobre perguntas.

import React from "react";

function QuestionCard({ question }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h2>{question.title}</h2>
      <p>{question.body.substring(0, 100)}...</p>
      <p>Tags: {question.tags.join(", ")}</p>
    </div>
  );
}

export default QuestionCard;
