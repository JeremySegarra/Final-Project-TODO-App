module.exports = {
  requireAuth(req, res, next) {
    console.log("requireAuth function", req.user);
    if (!req.user) {
      next({ statusCode: 401, message: "Unauthorized" });
    } else {
      next();
    }
  },
};
