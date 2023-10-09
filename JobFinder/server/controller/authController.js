import userModel from "../models/userModel.js";

// Register user
export const registerController = async (request, response, next) => {
  try {
    const { name, email, password, lastName } = request.body;
    //VALIDATE
    if (!name) {
      // return response.status(400).send({ success: false, message: "Please Provide Name!" });
      next("Please Provide Name!");
    }
    if (!email) {
      next("Please Provide Email!");
    }
    if (!password) {
      next("Please Provide Password! Password Must be Greater then 6 Character!");
    }

    //check email exist or not
    const existingUser = await userModel.findOne({email});

    if(existingUser){
        next("Email Already Registered! Please Login!");
    }

    //CREATE USER
    const user = await userModel.create({ name, email, password, lastName });

    // CREATE TOKEN
    const token = user.createJWT();


    response.status(201).send({
        success : true,
        message : 'User Created Successfully!',
        user : {
          name : user.name,
          lastName : user.lastName,
          email : user.email,
          location : user.location
        },
        token
    });

  } catch (error) {
    next(error);
  }
};


//Login User
export const loginController = async (request, response, next) =>{
  const {email, password} = request.body;
  //Validation
  if(!email || !password){
    next("Please Provide All Fields!");
  }
  //Find user by Email
  const user = await userModel.findOne({email}).select("+password");
  if(!user){
    next("Invalid Username & Password!");
  }
  //Compare password
  const isMatch = await user.comparePassword(password);
  if(!isMatch){
    next("Invalid Username & Password!");
  }
  user.password = undefined; //password security
  //token generation
  const token = user.createJWT();
  response.status(200).json({
    success : true,
    message : "Login Successfully!",
    user,
    token
  });
};
