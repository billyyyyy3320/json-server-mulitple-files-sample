module.exports = function(req, res, next) {
  const regex = /%(\d|[A-Z]){2}/;
  const isMatch = regex.test(req.url);
  if (isMatch) {
    req.url = decodeURI(req.url);
  }
  next();
};
