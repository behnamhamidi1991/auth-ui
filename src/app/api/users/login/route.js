import connectDB from "@/db/dbConfig";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request) {
  try {
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

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    // Create token
    const response = Response.json(
      { message: "Login successful" },
      { success: true }
    );

    response.cookies.set("token", token, { httpOnly: true, path: "/" });
    return response;
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
