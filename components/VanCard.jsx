import Image from "next/image";
import React from "react";
import image from "@/app/assets/images/t1.jpg";
import "@/components/styles/VanCard.scss";

const VanCard = () => {
  return (
    <div>
      <Image
        src={image}
        width={500}
        height={500}
        alt="Picture of the author"
        style={{ objectFit: "cover" }}
      />
      <div className="card-detail-container">
        <div className="card-detail-title">
          <h1>Miskolc, HU</h1>
          <h1>Rating 4.0</h1>
        </div>
        <div className="card-detail-main">
          <h1>Campervan Mercedes</h1>
          <p>Seat 6 | Bed 5</p>
          <p>from 100 Euro</p>
        </div>
        <button>Instant message</button>
      </div>
    </div>
  );
};

export default VanCard;
