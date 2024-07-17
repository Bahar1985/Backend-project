function notFoundError(req, res, next) {
  res.send({
    statusCode: 404,
    message: "Not Found page",
  });
}

function errorHandler(err, req, res, next) {
  const status = err?.status ?? err?.statusCode ?? 500;
  res.send({
    statusCode: status,
    message: err?.message ?? "internalServiceError",
  });
}

module.exports = {
  notFoundError,
  errorHandler,
};
