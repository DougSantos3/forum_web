/* Criar as Rotas
Adicione as rotas no arquivo App.js para gerenciar as páginas: */

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import QuestionDetail from "./pages/QuestionDetail.tsx"
import AskQuestion from "./pages/AskQuestion.tsx"
import Header from "./components/Header.tsx"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
        <Route path="/ask" element={<AskQuestion />} />
      </Routes>
    </Router>
  )
}

export default App
