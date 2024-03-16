import connectDB from "@/db/dbConfig";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";

export async function POST(request) {
  try {
    await connectDB();
    const reqBody = await request.json();
    const { username, email, password, password2 } = reqBody;

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return Response.json({ error: "User already exists!" }, { status: 400 });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const hashedPassword2 = await bcryptjs.hash(password2, salt);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      password2: hashedPassword2,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return Response.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
