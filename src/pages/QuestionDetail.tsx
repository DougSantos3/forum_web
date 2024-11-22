import React from "react"
import { useParams } from "react-router-dom"

// Definindo a tipagem para os parâmetros da URL
interface RouteParams {
  id: string
  [key: string]: string | undefined // Permite outras chaves de URL, se houver
}

const QuestionDetail: React.FC = () => {
  // Tipando o retorno de useParams
  const { id } = useParams<RouteParams>()

  return (
    <div>
      <h1>Question Details</h1>
      <p>Question ID: {id}</p>
      {/* Implementar lógica para buscar dados da pergunta por ID */}
    </div>
  )
}

export default QuestionDetail
