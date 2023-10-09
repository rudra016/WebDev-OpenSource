import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Schema Create
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required!"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is Required!"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
      minLength: [6, "Password Length Should be Greater than 6 Charcter!"],
      select: true,
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);

//MIDDLEWARE CREATE
userSchema.pre("save", async function () {
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// COMPARE PASSWORD
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

// JSON WEB TOKEN
userSchema.methods.createJWT = function () {
  //createJWT this is a function
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {expiresIn: "1d"});
};
export default mongoose.model("User", userSchema);
