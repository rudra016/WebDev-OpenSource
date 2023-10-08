const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

//Dot Config
dotenv.config();

//** MongoDb Connection ***/
connectDB();

//***** REST OBJECT ****/
const app = express();

//*** MIDDLEWARE */
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//***** MIDDLEWARE ROUTES ****/
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));

//STATIC ROUTES
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//***** PORT *****/
const PORT = process.env.PORT || 8080;

//***** LISTEN ******/
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} mode on Port ${process.env.PORT}`
      .bgBlue.white
  );
});
