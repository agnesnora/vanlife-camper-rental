import Image from "next/image";
import React from "react";
import image from "@/app/assets/images/t1.jpg";

const VanCard = () => {
  return (
    <div>
      <Image src={image} width={500} height={500} alt="Picture of the author" />
    </div>
  );
};

export default VanCard;
