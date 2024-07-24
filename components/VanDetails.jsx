import React from "react";
import Link from "next/link";

const VanDetails = ({ van }) => {
  return (
    <div>
      <h1>{van.name}</h1>
      <p>{van.type}</p>
      <p>{van.description}</p>
      <p>{van.location.city}</p>
      <p>Seat:{van.seat}</p>
      <p>Beds:{van.beds}</p>
      <p>Bath: {van.baths}</p>
      <p>Stars: {van.stars}</p>
      <div>
        <Link href={`/vans`}>Back to vans</Link>
      </div>
    </div>
  );
};

export default VanDetails;
