import connectDB from "@/db/dbConfig";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    connectDB();
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ error: "User does not exist!" }, { status: 400 });
    }

    //
    const tokenData = {
      id: user._id,
      username: user.email,
    };

    const token = jwt.sign(tokenData, process.TOKEN_SECRET);

    // Create token
    const response = Response.json(
      { message: "Login successful" },
      { success: true }
    );

    response.cookie.set("token", token, { httpOnly: false, path: "/" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
