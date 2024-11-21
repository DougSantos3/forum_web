/* Página de Detalhe da Pergunta: Mostra o conteúdo de uma pergunta e suas respostas. */

import React from "react";
import { useParams } from "react-router-dom";

function QuestionDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Question Details</h1>
      <p>Question ID: {id}</p>
      {/* Implementar lógica para buscar dados da pergunta por ID */}
    </div>
  );
}

export default QuestionDetail;
