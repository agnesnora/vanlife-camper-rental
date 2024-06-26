import connectDB from "@/config/database";
import Van from "@/models/Van";

// GET /api/vans
export const GET = async (request) => {
  try {
    await connectDB();
    const vans = await Van.find({});
    return new Response(JSON.stringify(vans), {
      status: 200,
    });
  } catch (error) {
    return new Response("something went wrong", { status: 500 });
    console.log(error);
  }
};
