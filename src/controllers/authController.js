import bcrypt from "bcryptjs";
import "dotenv/config";

import wrapper from "../middlewares/asyncWrapper.js";
import AccountModel from "../models/account.js";

const register = wrapper(async (req, res) => {
  const data = req.body;
  const salt = 10;

  data.password = await bcrypt.hash(data.password, salt);

  const newAccount = new AccountModel(data);
  await newAccount.save();

  const token = jwt.sign({ email: data.email }, process.env.JWT_SECRET, {
    expiresIn: "1y",
  });

  return res.status(201).json({
    status: 201,
    message: "Account created successfully!",
    account: data,
    token: token,
  });
});

const login = wrapper(async (req, res) => {
  const { email, password } = req.body;

  const user = await AccountModel.findOne({ email }, { __v: false });

  if (user) {
    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      return res.status(200).json({
        status: 200,
        message: "Loged in successfuly!",
        account: user,
      });
    } else {
      return res.status(401).json({
        status: 401,
        message: "Account not found",
        account: null,
      });
    }
  } else {
    return res.status(404).json({
      status: 404,
      message: "Account not found",
      account: undefined,
    });
  }
});

const deleteAccount = wrapper(async (req, res) => {
  const { email, password } = req.body;

  const user = await AccountModel.findOne({ email }, { __v: false });

  if (user) {
    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      await AccountModel.deleteOne({ email });
      return res.status(202).json({
        status: 202,
        message: "Account deleted successfully",
        account: null,
      });
    } else {
      return res.status(401).json({
        status: 401,
        message: "Account not found",
        account: null,
      });
    }
  } else {
    return res.status(404).json({
      status: 404,
      message: "Account not found",
      account: undefined,
    });
  }
});

export { register, login, deleteAccount };
