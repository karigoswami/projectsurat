import React, { useEffect, useState } from 'react'

function Silder1() {
    const[index,setIndex]=useState(0)
    const img=[
          "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/06/497454461_711724445346861_2136734690608621203_nITG-1750763617763.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4a7Dx6jI8urG6MZssGm4h6v1Rjcu7lRZoZQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GFfdklIcITyhe3n3MtnL2j9XkzgUk_zifw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBpYjroE1dUvoLzhRDixhhCZsbemw7YW-Wg&s"

    ]
    useEffect(()=>{
        const inv = setInterval(()=>{
            next()
        },3000)
        return ()=>clearInterval(inv)
    },[])
    const prev =()=>{
        setIndex((prev)=>(prev+1)% img.length)
    }
    const next =()=>{
        setIndex((prev)=>(prev === 0 ? img.length-1:prev-1))
    }
  return (
    <div>
      <img src={img[index]} alt="" width="100%" height="700px"/>
      <button onClick={prev}></button>
      <button onClick={next}></button>
    </div>
  )
}

export default Silder1
