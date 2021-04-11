import createError from "http-errors";

// Page Not Found handler
const notFound = (req, res, next) => {
  const error = new createError.NotFound("Page Not Found.");
  next(error);
};

// Catching all error and sending JSON response
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode).json({
    Error: {
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    },
  });
};

export { notFound, errorHandler };
