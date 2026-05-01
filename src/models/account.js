import * as mongoose from "mongoose";
import validator from "validator";

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "A username is required"],
  },
  email: {
    type: String,
    required: [true, "An e-mail is required"],
    unique: [true, "This e-mail is already in use"],
    validate: [validator.isEmail, "E-mail adress is invalid"],
  },
  password: {
    type: String,
    required: [true, "A password is required"],
    minLength: [6, "Password should contain at least 6 characters or more"],
  },
  isVerified: { type: Boolean, default: false },
  verificationCode: { type: String },
  verificationExpiry: { type: Date },
  confirmationCode: { type: String },
  confimationExpiry: { type: Date },
  abilityToChangePassword: { type: Boolean, default: false },
});

const AccountModel = mongoose.model("Account", AccountSchema);

export default AccountModel;
