import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Loginuser() {
    const[user,setUser]=useState({})
    const handleChange = (e) =>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
            
        })

    }
    const addclick =async()=>{
        const res =await axios.get(`http://localhost:5000/user?email=`+user.email)
        const arr = res.data
        if(arr && arr.length>0){
            alert("already email exit")

        }
        else{
            const resp = await axios.post("http://localhost:5000/user",user)
            if(resp){
                alert("successfully add")
            }
        }
    }
  return (
    <div>
       <div className="container mt-5" style={{marginBottom:"50px"}}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">Login</h3>

            <form method='post'>
             

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
           Login
              </button>
             
               <NavLink to="/register">register</NavLink>
               
            
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Loginuser
