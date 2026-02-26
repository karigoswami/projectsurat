import React, { useState } from 'react'

function Userhome() {
  const [hover,setHover]=useState(false);
  
  const card =[{
    id:1,
    img:"https://i.pinimg.com/736x/74/05/aa/7405aaee5bcd85c117de8ff121b9681d.jpg",
    title:"Radha Krishna",
    text:"Where there is Krishna, there is wisdom."
    
  },
  {
    id:2,
    img:"https://i.pinimg.com/736x/a6/7d/05/a67d05edf38a68c6e8f04a1877e7c151.jpg",
    title:"Radha Krishna",
    text:"where there is Radha, there is devotion."
  },
  {
    id:3,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlS-Nh9qdh3unVHZ_hnfg5eOuMzge2YOnKQ&s",
    title:"Radha Krishna",
    text:"where there is Radha and Krishna together, there is divine love."
  }
];
  return (
   <>
   <style>
    {`
    section{ 
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items: center;
    background-position: center;
    height:600px;
   background-color: rgb(0, 0, 0 ,0.6);
	background-blend-mode: overlay;
    animation: glow 10s ease-in-out infinite alternate;
     }
     @keyframes glow { 
     0% { 
     background-image: url("https://5.imimg.com/data5/ANDROID/Default/2023/1/EC/HR/VR/44825406/product-jpeg-500x500.jpg");
      background-size: cover; 
      
      
    
  
      background-repeat: no-repeat;
       }

   25% {
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFGWnmVKdIlglFdyUgue4RY2lyfBMNwGGQw&s);
    background-size: cover; 
    background-repeat: no-repeat; 
        } 

    100%{ 
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQLnVjFLbCjZ674NvwBHmqwYGuIZXsYg8IQ&s); 
    background-size: cover; background-repeat: no-repeat; 
    }
    `}
 
</style>

    
   
  
        <section >
         
        <div className='d-flex flex-column justify-content-center  align-items-center container text-center' >
       <h1 className='display-3 fw-normal mb-4 ' style={{color:"yellow", cursor:"pointer", marginTop:"200px"}}>🌹 Hare Krishna 🌹</h1>
       <p className='fs-5 mx-auto ' style={{maxWidth:"1150px",color:"cornsilk",cursor:"pointer"}}>“Hare Krishna, jeevan ka asli sukh bhagwan ki bhakti me hai.<br></br>
Jab hum Krishna ka naam lete hain, to mann shant hota hai aur jeevan ko sahi disha milti hai.”<br></br>“Hare Krishna, bhagwan Shri Krishna ka naam smaran karne se mann pavitra hota hai aur hriday me prem jagta hai.
<br></br>Krishna ki bhakti hi jeevan ko sachcha sukh aur shanti deti hai.”</p>


      
    </div>

     </section>
     
      <div className="d-flex justify-content-evenly mt-4">
      {card.map((card, index) => (
        <div key={card.id} className="card shadow-lg border-0 rounded-4" style={{ width: "25rem", marginBottom:"70px" }}>
          
          <div style={{ overflow: "hidden" }}>
            <img
              src={card.img}
              alt={card.title}
              className="card-img-top"
              style={{
                height:"350px",
                transition: "transform 0.5s ease-in-out",
                transform: hover === index ? "scale(1.2)" : "scale(1)",
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">
             {card.text}.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
 







      {/* <div className='d-flex justify-content-evenly ' >
       
        <img src="https://i.pinimg.com/736x/74/05/aa/7405aaee5bcd85c117de8ff121b9681d.jpg" className='img-fuild' style={{width:"30%",height:"400px",objectFit:"cover",cursor:"pointer"}} alt="" />
        
        <img src="https://i.pinimg.com/736x/a6/7d/05/a67d05edf38a68c6e8f04a1877e7c151.jpg" alt=""  className='img-fuild'style={{width:"30%",height:"400px",objectFit:"cover",cursor:"pointer"}} />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlS-Nh9qdh3unVHZ_hnfg5eOuMzge2YOnKQ&s'alt=""  className='img-fuild'style={{width:"30%",height:"400px",objectFit:"cover",cursor:"pointer"}}></img>
        

     </div>  */}
     
     </>
  )
}

export default Userhome
