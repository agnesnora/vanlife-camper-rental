"use client";
import React from "react";
import { useState, useEffect } from "react";
import VanCard from "./VanCard";

import styles from "@/components/styles/Vans.module.scss";
const Vans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch(`/api/vans`);

        if (!res.ok) {
          throw new Error("Failed to fetch vans");
        }

        const data = await res.json();
        console.log("data", data);
        setVans(data);
      } catch (error) {}
    };
    fetchVans();
  }, []);
  return (
    <div className={styles.container}>
      {vans.map((van) => (
        <VanCard key={van._id} van={van} />
      ))}
    </div>
  );
};

export default Vans;
