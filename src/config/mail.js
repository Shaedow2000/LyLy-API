import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ZOHO_MAIL,
    pass: process.env.ZOHO_MAIL_PASSWORD,
  },
});

const sendVerificationEmail = async (username, email, code) => {
  await transporter.sendMail({
    from: process.env.ZOHO_MAIL,
    to: email,
    subject: "E-mail Verification Code",
    html: /* html */ `
      <h2>Hi ${username}</h2>
      <p>We've sent the following one-time password (OTP) to verify your email address. Please note that this code will expire in 10 minutes.</p>
      <h3>${code}</h3>
      <p>And Thank you for using lyly!</p>
    `,
  });
};

export default sendVerificationEmail;
