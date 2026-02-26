import React, { useState } from 'react'

function Userproduct() {
    const[hover,setHover]=useState(null);
    const[cart,setCart]=useState([]);
   
    const card=[{

        id:1,
        img:"https://m.media-amazon.com/images/I/81vLiRbuFzL._AC_UF894,1000_QL80_.jpg",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
        
    },
    {
         id:2,
        img:"https://play-lh.googleusercontent.com/3S5jExNLK0_-YNv0E_0nfD8SSx6fqkOAH6smrVYOZdWm-c38QBorVYnrBvlG6vdj5w",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    },
    {
         id:3,
        img:"https://ghardecors.com/wp-content/uploads/2025/05/unique-radha-krishna-peacock-hd-wallpaper-214331.jpg",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    },
    {
         id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7uorlPN5UWHHGWz_w6XF0ZTghXUxse2I_Q&s",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    },
    {
 id:5,
        img:"https://m.media-amazon.com/images/I/61BZrbZP7YL._AC_UF350,350_QL50_.jpg",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    },
    {
         id:6,
        img:"https://www.tallengestore.com/cdn/shop/products/Krishna_Playing_Flute_With_Radha_68b4fd7b-b015-4dcb-9adf-bdb53eff3472.jpg?v=1568961418",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    },
     {
         id:7,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwjTxcaXvSFfLIP4P5sM0qE2cfsPSs0rWag&s",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    },
     {
         id:8,
        img:"https://eazyarts.in/cdn/shop/files/RLG-035-1.png?v=1726394783",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    },
     {
         id:9,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21PHOhKqZ6-MAbRDBW0z9pvv5g5eu_Sky1Q&s",
        title:"Radhakrishna",
        text:"Where there is Krishna, there is wisdom."
    }


];
const deleteclick =(id)=>{
    const array = cart.filter(index => index.id !== id)
    setCart(array)

}
//  const addtocart =(item)=>{
//         setCart([...cart,item])
//     }
 const addtocart = (index) => {
    const exists = cart.find((i) => i.id === index.id);
    if (!exists) {
      setCart([...cart, index]);
    }
  };
  
  return (
    <>
     <h4 className="text-center mt-3">
        Cart Items: {cart.length}
          <div className="container mb-4" style={{width:"50%"}}>
        {  
       
            cart.map((index)=>(
                <div key={index} className='card mb-3 p-3 d-flex flex-row gap-3 align-items-center'>

                    <img src={index.img} alt=""   style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    <div>
                    <div>{index.title}</div>
                    <div>{index.text}</div></div>
                    <button className='btn btn-danger' onClick={() =>deleteclick(index.id)}>Delete</button>
                </div>
                
               
            ))
        }
        </div>
      </h4>
    <div className='d-flex justify-content-evenly flex-wrap  mt-4'>
        
        {
            card.map((card,index)=>(
                <div key={card.id} className='card' style={{marginBottom:'50px',width:"30%"}}>
                    <div style={{overflow:"hidden"}}>
                    <img src={card.img} alt={card.title} 
                    className='card-img-top'
                    style={{height:"350px",
                        transition:"transform 0.5s ease-in-out",
                        transform: hover === index ? "scale(1.2)": "scale(1)"


                    }}
                    onMouseEnter={()=>setHover(index)}
                    onMouseLeave={()=>setHover(null)}
                    
                    />
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>{card.title}</h4>
                        <p className='card.text'>{card.text}</p>
                        <button className='btn btn-primary' onClick={()=>addtocart(card)}>Add to cart</button>

                    
                    </div>

                </div>
               
            
            ))
             
        }
       
                 

              

        
    
    </div>
     </>
  )
}

export default Userproduct
