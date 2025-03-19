import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar({scroll}) {
  
  
 


 
    return (
<>
      <nav className={scroll ? "navbar navbar-expand-lg navbar-dark fixed-top bg-scroll" : "navbar navbar-expand-lg navbar-dark fixed-top"} >
  <div className="container-fluid">
    
      <img src="../Data/images/logo.jpg" alt="" width="120" height="104"/>
      <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/harvestchart">Harvest Chart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
       
      </ul>
     
      
      
    </div>
  </div>
</nav> 

</>
      
    );
}
