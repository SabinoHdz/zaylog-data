const { ValidationError } = require('sequelize');

function logErrors(error, req, res, next) {
  console.error(error);
  next(error);
}
function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}
function boomErrorHadler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}
function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  }
  next(err);
}
module.exports = { logErrors, ormErrorHandler, errorHandler, boomErrorHadler };
