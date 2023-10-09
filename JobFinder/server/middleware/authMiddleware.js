import JWT from "jsonwebtoken";

const userAuth = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    next("Auth Failed!");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payLoad = JWT.verify(token, process.env.JWT_SECRET);
    request.body.user = { userId: payLoad.userId };
    next();
  } catch (error) {
    next("Auth Failed!");
  }
};

export default userAuth;
