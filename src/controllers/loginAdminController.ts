import jwt from "jsonwebtoken";
import { passwordJwt } from "../config/authConfig";
import { errorsGeneric } from "../utils/errorMessages";
import { successfulMessages } from "../utils/successMessages";

const loginAdminController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: errorsGeneric.authenticationFailed,
    });
  }

  const admin = {
    username: "Leonhard Euler",
    password: "2.718",
  };

  if (username !== admin.username || password !== admin.password) {
    return res
      .status(401)
      .json({ message: errorsGeneric.authenticationFailed });
  }

  const token = jwt.sign({ username }, passwordJwt, {
    expiresIn: "6h",
  });

  return res.status(200).json({
    message: successfulMessages.login,
    token,
  });
};

export { loginAdminController };
