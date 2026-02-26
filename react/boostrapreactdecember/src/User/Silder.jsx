import React, { useEffect, useState } from 'react'

function Silder() {
    const img=[
        "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/06/497454461_711724445346861_2136734690608621203_nITG-1750763617763.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4a7Dx6jI8urG6MZssGm4h6v1Rjcu7lRZoZQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GFfdklIcITyhe3n3MtnL2j9XkzgUk_zifw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBpYjroE1dUvoLzhRDixhhCZsbemw7YW-Wg&s"
   

    ]
    const [index,setIndex]=useState(0)

   const prev =()=>{
    setIndex((prev)=>(prev+1)%img.length)
   }
   const next=()=>{
    setIndex((prev)=>(prev === 0 ? img.length-1:prev-1))
   }

    useEffect(()=>{
        const interval = setInterval(()=>{
            next()
        },3000)
        return ()=>clearInterval(interval)
    },[])

  return (
    <div style={{position:"relative", marginBottom:"50px"}}>
      <img src={img[index]} alt="" width="100%" height="700px"/>
      <button onClick={prev} style={{position:"absolute", top:"350px", left:"100px",transform: "scale(50%)" ,transition: "transform 0.8s ease-in-out",fontSize:"50px"}}>➡️</button>
      <button onClick={next}  style={{position:"absolute", top:"350px" ,right:"100px",transform: "scale(50%)",transition: "transform 0.8s ease-in-out",fontSize:"50px"}}>⬅️</button>
    </div>
  )
}

export default Silder
