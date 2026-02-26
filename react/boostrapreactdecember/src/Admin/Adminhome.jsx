import React, { useState } from 'react'

function Adminhome() {
    const[hover,setHover]=useState(null)
   
    const card =[{
        id:1,
        title:"0",
        text:"User "


    },
    {
        id:2,
        title:"1",
        text:"Review"


    },
    {
        id:3,
        title:"2",
        text:"Like"


    },
    {
        id:4,
        title:"300",
        text:"Login"


    },
    {
        id:5,
        title:"400",
        text:"Product"


    },
    {
        id:6,
        title:"509",
        text:"User"


    },
];
  return (
    <div className='d-flex justify-content-evenly  flex-wrap ' >
        {
            card.map((card,item)=>(
                <div key ={card.id} className='card ' 
                onMouseEnter={()=>setHover(item)}
                onMouseLeave={()=>setHover(null)}
                
                style={{width:"350px", marginBottom:"50px",cursor:"pointer",

                   

           border: hover === item
              ? "5px solid   green"
              : "2px solid red",

            boxShadow: hover === item
              ? "0 10px 25px rgba(0,0,0,0.2)"
              : "0 4px 10px rgba(0,0,0,0.1)",

            transform: hover === item
              ? "translateY(-8px)"
              : "translateY(0)",

            transition: "all 0.3s ease-in-out",
            color:hover === item
            ?"hotpink":"black"
            
                }}
                
                >
                    <div style={{overflow:"hidden"}}>
                        <div style={{fontSize:"100px",textAlign:"center"}}>{card.title}</div>


                    </div>
                    <div className='card-body'>
            <h5 className='text-center'>{card.text}</h5>
        </div>
      
                </div>
            ))
        }
        
    </div>
  )
}

export default Adminhome
