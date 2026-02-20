const generateToken = require("../../utils/generateToken");
const adminService = require("./admin.service");
const brevo = require("../../config/brevo");

exports.registerAdmin = async (req, res, next) => {
  try {
    const admin = await adminService.createAdmin(req.body);

    // Send email via Brevo
    await brevo.sendTransacEmail({
      sender: {
        email: process.env.EMAIL_FROM,
        name: "Admin System",
      },
      to: [{ email: admin.email }],
      subject: "Welcome Admin",
      htmlContent: `<h3>Welcome ${admin.name}</h3><p>Your admin account is ready.</p>`,
    });

    res.status(201).json({
      success: true,
      token: generateToken(admin._id),
    });
  } catch (err) {
    next(err);
  }
};

exports.loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await adminService.loginAdmin(email, password);

    res.json({
      success: true,
      token: generateToken(admin._id),
    });
  } catch (err) {
    next(err);
  }
};