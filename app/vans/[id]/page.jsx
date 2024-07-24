"use client";

import VanDetails from "@/components/VanDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { fetchVan } from "@/utils/requests";

const VanPage = () => {
  const { id } = useParams();

  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVanData = async () => {
      if (!id) return;
      try {
        const van = await fetchVan(id);
        setVan(van);
      } catch (error) {
        console.error("Error fetching van:", error);
      } finally {
        setLoading(false);
      }
    };
    if (van === null) {
      fetchVanData();
    }
  }, [id, van]);

  if (!van && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">Van Not Found</h1>
    );
  }

  return (
    <div>{van ? <VanDetails van={van} /> : <p>Loading van details...</p>}</div>
  );
};

export default VanPage;
