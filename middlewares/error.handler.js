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
module.exports = { logErrors, errorHandler,boomErrorHadler };
