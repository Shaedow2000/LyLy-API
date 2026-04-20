import jwt from "jsonwebtoken";
import "dotenv/config";
import AccountModel from "../models/account";

const tokenVerification = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await AccountModel.findOne({ email: decodedToken.email });

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({
        status: 401,
        messgae: "Account not found",
        account: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

export default tokenVerification;
