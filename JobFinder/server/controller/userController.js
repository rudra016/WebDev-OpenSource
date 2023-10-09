import userModel from "../models/userModel.js";

export const updateUserController = async (request, response, next) => {
  const { name, email, lastName, location } = request.body;
  // validation
  if (!name || !email || !lastName || !location) {
    next("Pleasr provide all fields!");
  }
  const user = await userModel.findOne({ _id: request.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
  const token = user.createJWT();

  response.status(200).json({
    user,
    token,
  });
};

//****** GET USER DATA *******/
export const getUserController = async (req, res, next) => {
  try {
    const user = await userModel.findById({ _id: req.body.user.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "User Not Found!",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Auth Error",
      success: false,
      error: error.message,
    });
  }
};
