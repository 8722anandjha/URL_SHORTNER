import { cookieOptions } from "../config/config.js";
import { loginUser, registerUser } from "../services/auth.service.js";

export const register_User = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const {token} = await registerUser(name, email, password);
 
  res
    .status(201)
    .cookie("accessToken", token, cookieOptions)
    .json({ token, message: "Register success" });
};

export const login_User = async (req, res) => {
  const { email, password } = req.body;

  const { token, user } = await loginUser(email, password);
  const userObj = user.toObject();
  delete userObj.password;
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({
    userObj,
    message: "login successfull",
  });
};
