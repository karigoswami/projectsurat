import React from "react";

function Bck() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>🌹 Hare Krishna 🌹</h1>
        <p>Bhakti hi jeevan ka asli sukh hai</p>
      </div>

      <style>{`
        .hero-section {
          width: 100%;
          height: 100vh; /* full screen height */
          background-image: url('https://i.pinimg.com/736x/74/05/aa/7405aaee5bcd85c117de8ff121b9681d.jpg'); /* your image */
          background-size: contain;   /* image fully visible, no crop */
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          color: white;
          text-align: center;
        }

        /* optional overlay for text readability */
        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
        }

        .hero-text {
          position: relative; /* above overlay */
          z-index: 1;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .hero-text p {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }
          .hero-text p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Bck;
