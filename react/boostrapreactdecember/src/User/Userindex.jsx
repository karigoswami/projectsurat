import React from 'react'
import Usernavbar from './Usernavbar'
import { Outlet } from 'react-router-dom'

function Userindex() {
  return (
    <div>
      <Usernavbar/>
      <Outlet/>
    </div>
  )
}

export default Userindex
