// Página Home: Exibe uma lista de perguntas.

import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "../components/QuestionCard";

function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("/api/questions").then((response) => setQuestions(response.data));
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
}

export default Home;
