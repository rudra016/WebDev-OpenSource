const userModel = require("../models/userModel");
module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.userId);
    //Check Admin
    if (user?.role !== "admin") {
      return (
        res.status(401) /
        send({
          success: false,
          message: "Auth Failed, Admin API!",
        })
      );
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send({
      success: false,
      message: "Auth Failed, Admin API!",
      err,
    });
  }
};
