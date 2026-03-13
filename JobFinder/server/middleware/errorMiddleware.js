//ERROR MIDDLEWARE CREATE || NEXT FUNCTION
const errorMiddleware = (err, request, response, next) => {
  const defaultErrors = {
    statusCode: 500,
    message: err,
  };
  

  //MISSING FIELD ERROR
  if (err.name == "ValidationError") {
    defaultErrors.statusCode = 400;
    defaultErrors.message = Object.values(err.errors).map((item) => item.message).join(",");
  }

  //DUPLICATE ERROR
  if(err.code && err.code === 11000){  //E11000 duplicate key error index in mongodb mongoose
    defaultErrors.statusCode = 400;
    defaultErrors.message = `${Object.keys(err.keyValue)} Field has to be Unique!`;

  }

  response.status(defaultErrors.statusCode).json({message : defaultErrors.message});
};

export default errorMiddleware;
