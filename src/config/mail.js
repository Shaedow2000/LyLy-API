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
      <p>And Thank you for using Thinc!</p>
    `,
  });
};

const sendWelcomeEmail = async (username, email) => {
  await transporter.sendMail({
    from: process.env.ZOHO_MAIL,
    to: email,
    subject: `Welcome to Thinc!`,
    hmtl: /* html */ `
      <h2>Hello ${username},</h2>
      <p>We give you a big welcome to our app! We activated your account, and now you can freely use it!</p>
      <p>Start your journey now, just click on the <a href="https://example.com">link</a> to be redirected to the WebApp.</p>
      </br>
      <p>To always recieve emails from us, make sure that our email address is not in the spam, and add it to your address book!</p>
      <p>Feel free to contact us if you encouter a problem: thinc-dev@zohomail.com</p>
      </br>
      </br>
      <p>Salute, from Thinc Dev Team</p>
    `,
  });
};

export { sendVerificationEmail, sendWelcomeEmail };
