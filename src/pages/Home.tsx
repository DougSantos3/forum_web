import React, { useState, useEffect } from "react"
import axios from "axios"
import QuestionCard from "../components/QuestionCard"

// Tipando o tipo da questão
interface Question {
  id: number
  title: string
  body: string
  tags: string[]
}

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    axios.get("/api/questions").then((response) => setQuestions(response.data))
  }, [])

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  )
}

export default Home
