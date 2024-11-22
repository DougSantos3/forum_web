import React from "react"

// Definindo o tipo para as props do componente
interface QuestionCardProps {
  question: {
    title: string
    body: string
    tags: string[]
  }
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h2>{question.title}</h2>
      <p>{question.body.substring(0, 100)}...</p>
      <p>Tags: {question.tags.join(", ")}</p>
    </div>
  )
}

export default QuestionCard
