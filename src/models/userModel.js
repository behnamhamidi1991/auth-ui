import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a valid username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a valid password"],
    unique: false,
  },
  password2: {
    type: String,
    required: [true, "Please confirm your password"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

let User;

if (mongoose.models.users) {
  User = mongoose.models.users;
} else {
  User = mongoose.model("users", userSchema);
}

export default User;
