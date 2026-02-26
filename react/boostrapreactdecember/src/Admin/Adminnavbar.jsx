import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Adminnavbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-success ' style={{marginBottom:"40px"}}>
 <div className="container">
        
        {/* Brand */}
        <Link className="navbar-brand" to="/">
         RadheKrishna🦚
        </Link>
     

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Admin/home">Dashbord</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Admin/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Admin/product">Product</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/Admin/register">Register</Link>
            </li>
             
          </ul>
        </div>

      </div>
    </nav>
    <Outlet/>
    </div>
   

    
   
  )
}

export default Adminnavbar
