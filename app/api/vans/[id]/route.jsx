import connectDB from "@/config/database";
import Van from "@/models/Van";

// GET /api/vans
export const GET = async (request, { params }) => {
  console.log(request);

  try {
    await connectDB();
    const van = await Van.findById(params.id);
    return new Response(JSON.stringify(van), {
      status: 200,
    });
  } catch (error) {
    return new Response("something went wrong", { status: 500 });
  }
};
