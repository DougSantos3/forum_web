import React, { useState, FormEvent } from "react"

const AskQuestion: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

  // Tipando o evento do submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log({ title, body })
    // Lógica para enviar a pergunta para a API
  }

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
  )
}

export default AskQuestion
