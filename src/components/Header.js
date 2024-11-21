/* Criar Componentes Básicos
Header: Um cabeçalho com links para navegar entre páginas */

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f4f4f4" }}>
      <h1>Stack Overflow Clone</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/ask">Ask a Question</Link>
      </nav>
    </header>
  );
}

export default Header;
