const jwt = require("jsonwebtoken");
const Admin = require("../modules/admin/admin.model");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw new Error("Not authorized");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = await Admin.findById(decoded.id).select("-password");

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};