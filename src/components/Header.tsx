import React from "react"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header style={{ padding: "1rem", background: "#f4f4f4" }}>
      <h1>Stack Overflow Clone</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/ask">Ask a Question</Link>
      </nav>
    </header>
  )
}

export default Header
