import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/editorpage"}>Editorpage</Link>
    </header>
  )
}

export default Header
