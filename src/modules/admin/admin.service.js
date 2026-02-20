const bcrypt = require("bcryptjs");
const Admin = require("./admin.model");
const AppError = require("../../utils/AppError");

exports.createAdmin = async (data) => {
  const existing = await Admin.findOne({ email: data.email });

  if (existing) {
    throw new AppError("Admin already exists", 400);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const admin = await Admin.create({
    ...data,
    password: hashedPassword,
  });

  return admin;
};

exports.loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({ email });

  if (!admin) throw new AppError("Invalid credentials", 401);

  const match = await bcrypt.compare(password, admin.password);

  if (!match) throw new AppError("Invalid credentials", 401);

  return admin;
};