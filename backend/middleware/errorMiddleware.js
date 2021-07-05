const notFound = (req, res, next) => {
  const error = new Error(`Sorry!! Not found = ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    message: err.message, //this message will also be fetched in our frontend while using actions (in error payload)
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
