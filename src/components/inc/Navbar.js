import React from 'react'
import {Link} from "react-router-dom"
import logo from "../images/logo.jpg"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  bg-c-dark">
        <div className="container " >
          <Link to="/" className="navbar-brand logo" href="#">
            
            
            <img src={logo}/>
            
            
            
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-3">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link >
              </li>
              <li className="nav-item ms-3">
                <Link to="/plans" className="nav-link" href="#">Plans</Link >
              </li>
              <li className="nav-item ms-3">
                <Link to="/media"  className="nav-link" href="#">Social Media Marketing</Link >
              </li>
              <li className="nav-item ms-3">
                <Link to="/seo"  className="nav-link" href="#">SEO Services</Link >
              </li>
              <li className="nav-item ms-3">
                <Link to="/paidmarketing" className="nav-link" href="#">Paid Marketing</Link >
              </li>
              <li className="nav-item ms-3">
                <Link to="/contentmarketing"  className="nav-link" href="#">Content Marketing </Link >
              </li>
             
             
            </ul>
        
                <button className="btn">Let's Connect</button>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
