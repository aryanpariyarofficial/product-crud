import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <> <div className="navbar">
    <a className="logo" href='/'>Your Logo</a>
    <a href="/">Home</a>
    <a href="/add-product">Add Blog</a>
    <a href="#">Contact</a>
</div>
</>
  )
}

export default Navbar