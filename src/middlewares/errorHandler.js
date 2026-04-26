const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const errMessage = err.message || "Internal Server Error.";

  console.log(`[ ERROR ]<${statusCode}>=> ${errMessage}`);
  console.log(err);

  res.status(statusCode).json({
    status: statusCode,
    message: errMessage,
  });
};

export default errorHandler;
