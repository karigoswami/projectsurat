import { Route, Routes } from "react-router-dom";

import Usernavbar from "./User/Usernavbar";
import Userfooter from "./User/Userfooter";
import Userhome from "./User/Userhome";
import Userabout from "./User/Userabout";
import Userproduct from "./User/Userproduct";

import Adminnavbar from "./Admin/Adminnavbar";
import Adminhome from "./Admin/Adminhome";
import Adminabout from "./Admin/Adminabout";
import Adminproduct from "./Admin/Adminproduct";
import Login from "./Admin/Login";
import Register from "./Admin/Register";
import Bck from "./User/Bck";
import Registeruser from "./User/Registeruser";
import Loginuser from "./User/Loginuser";
import Silder from "./User/Silder";

function App() {
  return (
    <>
    {/* <Bck/> */}
    <Routes>
      <Route path="/" element={
        <>
        <Usernavbar/>
        <Userfooter/>
        </>
      }>
     <Route path="/home" element={<Userhome/>}></Route>
      <Route path="/about" element={<Userabout/>}></Route>
       <Route path="/product" element={<Userproduct/>}></Route>
       <Route path="/register" element={<Registeruser/>}></Route>
       <Route path="/loginuser" element={<Loginuser/>}></Route>
       <Route path="/silder" element={<Silder/>}></Route>
       
       
       



      </Route>
      {/* ==========admin======== */}
      <Route path="/Admin" element={<><Adminnavbar/> <Userfooter/></>}>
       <Route path="/Admin/home" element={<Adminhome/>}></Route>
        <Route path="/Admin/about" element={<Adminabout/>}></Route>
         <Route path="/Admin/product" element={<Adminproduct/>}></Route>
          <Route path="/Admin/login" element={<Login/>}></Route>
          <Route path="/Admin/register" element={<Register/>}></Route>
         
       </Route>
    </Routes>
      </>
  );
}

export default App;
