import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  passWord: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    default: "",
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
