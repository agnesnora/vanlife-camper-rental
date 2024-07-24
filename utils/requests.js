const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//Fetch vans

const fetchVans = async () => {
  try {
    const res = await fetch(`/api/vans`);

    if (!res.ok) {
      throw new Error("Failed to fetch vans");
    }

    const data = await res.json();
    // console.log("data", data);
    setVans(data);
  } catch (error) {
    console.log(error);
  }
};

// Fetch single van

async function fetchVan(id) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/vans/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchVans, fetchVan };
