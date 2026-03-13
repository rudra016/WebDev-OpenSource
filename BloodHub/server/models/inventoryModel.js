const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "Inventory Type Required!"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood Group is Required!"],
      enum: ["O+", "O-", "AB", "AB+", "AB-", "A+", "B+", "A-", "B-"],
    },
    quantity: {
      type: Number,
      required: [true, "Blood Quantity is Required!"],
    },
    email: {
      type: String,
      required: [true, "Donor Email is Required!"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "organisation is Required!"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

//****** EXPORT *****/
module.exports = mongoose.model("Inventory", inventorySchema);
