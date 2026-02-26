import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Adminproduct.css"

function Adminproduct() {
  const [user, setUser] = useState({

});
const [edit,setEdit]=useState(null)


  const[userlist,setUserlist]=useState([])
  const getproduct = async()=>{
    const res = await axios.get("http://localhost:5000/product")
    setUserlist(res.data)
   
  }
  useEffect(()=>{
    getproduct()
  },[])
 const handlechange = (e) => {
  const { name, value } = e.target;
  setUser({
    ...user,
    [name]:value
  })
}

  

  const addclick = async()=>{
    try {
      if(edit){
        await axios.put(`http://localhost:5000/product/${edit}`,user)
        alert("updated value")
        setEdit(null)
        console.log(edit);
        
      }else{
await axios.post("http://localhost:5000/product",user)
    alert("add")
    

      }
      setUser({})
      getproduct()
    } catch (error) {
      
    }
    
   console.log(userlist);
  
       
   
  }
const deleteclick =async(id)=>{
try {

  await axios.delete(`http://localhost:5000/product/${id}`)
  alert("deleted")
  getproduct()
} catch (error) {
 
  
  console.log(error);
  
}

}
const editclick =(index)=>{
  setUser({
    image:index.image,
    utext:index.utext,
    desc:index.desc,
    price:index.price
  })
  setEdit(index.id)



}
  return (
    <>
     <h1 className='text-center' style={{color:"red"}} >Add product</h1>
    <div className='container d-flex justify-content-center'>
     
      <div className='card shadow-lg border-0 rounded-4 ' style={{width:"500px",height:"600px", padding:"20px",marginBottom:"50px" ,height:"340px"}}>
      <input type="text"    name='image'   placeholder='enter the img'  onChange={handlechange} className="form-control"/><br/>
       
       <input type="text" name='utext' placeholder='enter the text' onChange={handlechange}  value={user.utext}  className="form-control" /><br/>
       <input type="text" name='desc' placeholder='enter the description' onChange={handlechange} value={user.desc} className="form-control"/><br/>
        <input type="text" name='price' placeholder='enter the price' onChange={handlechange}  value={user.price} className="form-control"/><br/>
      
       <button className='btn btn-primary ' onClick={addclick} >{edit?"Update":"Add"}</button>

    </div></div>
    <div className='d-flex justify-content-evenly flex-wrap'>
      
      
      {
        
        userlist.map((index,i)=>(
          
         
          <div key={i} className='card shadow-lg product-card border-0 rounded-4' style={{width:"400px", marginBottom:"50px"}}>

         <img
              src={index.image}
              alt={index.image}
              className="img-fluid rounded mb-2"
              style={{ height: "300px", width:"400px", objectFit: "cover" }}
            />
            <h4 className='p-2'>{index.utext}</h4>
            <div  className='p-2'>{index.desc}</div>
            <div className='p-2' style={{color:"blue", fontWeight:"bold"}}>{index.price}</div>
            <div className='d-flex gap-5 p-2'>
            <button className='btn btn-danger w-50'  style={{marginBottom:"20px"}}  onClick={()=>deleteclick(index.id)}>Delete</button>
            <button className='btn btn-success w-50 '  style={{marginBottom:"20px"}}  onClick={()=>editclick(index)}>Edit</button>
</div>
          </div>
         
        ))
      }
    </div>
    </>
  )
}

export default Adminproduct
