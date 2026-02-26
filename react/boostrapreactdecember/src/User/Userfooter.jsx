import React from 'react'

function Userfooter() {
  return (
    <>
    <div>
      <footer class="bg-success text-light pt-5">
  <div class="container">
    <div class="row">

    
      <div class="col-md-4 mb-4">
        <h5 class="mb-3" style={{color:"#ffc107"}}>RadhaKrishna 🦚</h5>
        <p>
         Radha is not just Krishna’s beloved <br/>she represents pure devotion, selfless love, 
         <br/>and complete surrender.
        </p>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="mb-3" >Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" className=" text-decoration-none footer-link">Home</a></li>
          <li><a href="#" className=" text-decoration-none footer-link">About</a></li>
          <li><a href="#" className="text-decoration-none footer-link">Services</a></li>
          <li><a href="#" className=" text-decoration-none footer-link">Contact</a></li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="mb-3">Contact Us</h5>
        <p>Email: example@gmail.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

    </div>
<hr className='border-top  border-light opacity-100' />

    <div class="text-center pt-3 pb-2 mt-3">
      © 2025 RadhaKrishna | All Rights Reserved
    </div>
  </div>
</footer>

    </div>
    <style>
      {`

      .footer-link {
          color: #ffffff;
          
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #ffc107;
          padding-left: 6px;
        }
      `}
    </style>
    
    </>
  )
}

export default Userfooter
