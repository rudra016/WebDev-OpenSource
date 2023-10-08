const mongoose = require("mongoose");

//** USER SCHEMA CREATE *****/
const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is Required!"],
      enum: ["admin", "organisation", "donor", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "user" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "Email is Required!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Please Fill the Address!"],
    },
    phone: {
      type: String,
      required: [true, "Phone Number is Required!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
