const requireAuth = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");

router.get(
  "/protected-route",
  requireAuth,
  requireRole("admin"), // Only admin can access
  (req, res) => {
    res.json({ message: "You are an admin!" });
  }
);

module.exports = function requireRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      return next();
    }
    return res.status(403).json({ message: "Forbidden: insufficient role" });
  };
};
