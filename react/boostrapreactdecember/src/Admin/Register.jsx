import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
    const[user,setUser]=useState({})
   
    const handleChange =(e)=>{
        const{name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const addclick =async()=>{
        try {
            const res = await axios.get(`http://localhost:5000/user?email=`+user.email);
            const arr = res.data
            console.log(arr);
            if(arr && arr.length>0){
                alert("already register")
            }
            else{
                const resp =await axios.post("http://localhost:5000/user",user)
                if(resp){
                    alert("succefully add")
                }
            }
            
        } catch (error) {
            
        }
       
      
       }
    
  return (
    <div>
       <div className="container mt-5" style={{marginBottom:"50px"}}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">Register</h3>

            <form method='post'>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>

             
            <div className='d-flex  align-items-center' style={{gap:"50px",fontSize:"20px"}}>

              <button className="btn btn-primary w-50" type="button"onClick={addclick} >
                Register
              </button>
             
               <NavLink to="/Admin/login">Login</NavLink>
               
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Register
