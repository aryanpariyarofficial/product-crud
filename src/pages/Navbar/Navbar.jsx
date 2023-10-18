import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <> <div className="navbar">
    <a className="logo" href="#">Your Brand</a>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <div className="dropdown">
        <button className="dropbtn">Services 
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
            <a href="#">Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
        </div>
    </div>
    <a href="#">About Us</a>
    <a href="#">Contact</a>
</div>
</>
  )
}

export default Navbar