import React from "react";

const Head =()=>{
    return (
    <div className="container mt-5">
      <h2 className="text-center mb-4"> Bike That make your soul Happy</h2>

      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>About This Bike</h3>
          <p>
            This Bike offers outstanding performance and design. Built with a
            powerful engine and cutting-edge technology, it provides a smooth,
            efficient, and luxurious driving experience.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.nt0RU6c0pMJnx03sDGc96gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Bike"
            className="img-shadow"
          />
        </div>
      </div>
    </div>
  );
};



export default Head;