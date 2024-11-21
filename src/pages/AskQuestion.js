// Página de Criar Pergunta: Um formulário para enviar uma nova pergunta.

import React, { useState } from "react";

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, body });
    // Lógica para enviar a pergunta para a API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ask a Question</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Describe your question"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AskQuestion;
