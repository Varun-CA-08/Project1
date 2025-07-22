import React, { useState } from "react";

const Card = () => {
  const [maleBtnClicked, setMaleBtnClicked] = useState(false);
  const [femaleBtnClicked, setFemaleBtnClicked] = useState(false);

  const maleImage =
    "https://i.pinimg.com/originals/28/6b/0a/286b0ad467e37bfe95546256c67a59c4.jpg";
  const femaleImage =
    "https://tse4.mm.bing.net/th/id/OIP.p_1yL_pslRuW65a2XnemCAHaLI?rs=1&pid=ImgDetMain&o=7&rm=3"; // Example girl image

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Male Card */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={maleImage} className="card-img-top" alt="Male" />
        <div className="card-body">
          <h5 className="card-title">Male Card</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <button
            className={`btn ${maleBtnClicked ? "btn-success" : "btn-primary"}`}
            onClick={() => setMaleBtnClicked(!maleBtnClicked)}
          >
            {maleBtnClicked ? "Clicked!" : "Go somewhere"}
          </button>
        </div>
      </div>

      {/* Female Card */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={femaleImage} className="card-img-top" alt="Female" />
        <div className="card-body">
          <h5 className="card-title">Female Card</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <button
            className={`btn ${
              femaleBtnClicked ? "btn-success" : "btn-danger"
            }`}
            onClick={() => setFemaleBtnClicked(!femaleBtnClicked)}
          >
            {femaleBtnClicked ? "Clicked!" : "Go somewhere"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
