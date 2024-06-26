import Image from "next/image";
import React from "react";
import styles from "@/components/styles/VanCard.module.scss";
const VanCard = ({ van }) => {
  return (
    <div className={styles.card}>
      <Image
        className="main-image"
        src={`/images/${van.images[0]}`}
        alt={`Image of ${van.name}`}
        width={200}
        height={200}
        style={{
          width: " 300px",
          height: "200px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />

      <div className="card-detail-container">
        <div className="card-detail-title">
          <h1>{van.location.city}</h1>
          <h1>{van.stars}</h1>
        </div>
        <div className="card-detail-main">
          <h1>{van.name}</h1>
          <p>
            Seats: {van.seat} | Beds: {van.beds}
          </p>
          <p>{van.rates.monthly} EUR</p>
        </div>
        <button>Instant message</button>
      </div>
    </div>
  );
};

export default VanCard;
