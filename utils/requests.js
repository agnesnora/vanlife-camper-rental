//Fetch vans

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
