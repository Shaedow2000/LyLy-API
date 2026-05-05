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
      <h3><b>${code}</b></h3>
      <p>And Thank you for using Thinc!</p>
      </br>
      <p>Salutes, from Thinc Dev Team</p>
    `,
  });
};

const sendWelcomeEmail = async (username, email) => {
  await transporter.sendMail({
    from: process.env.ZOHO_MAIL,
    to: email,
    subject: "Welcome to Thinc!",
    html: /* html */ `
      <h2>Hello ${username},</h2>
      <p>We give you a big welcome to our app! We activated your account, and now you can freely use it!</p>
      <p>Start your journey now, just click on the <a href="https://example.com">link</a> to be redirected to the WebApp.</p>
      </br>
      <p>To always recieve emails from us, make sure that our email address is not in the spam, and add it to your address book!</p>
      <p>Feel free to contact us if you encouter a problem: thinc-dev@zohomail.com</p>
      </br>
      </br>
      <p>Salutes, from Thinc Dev Team</p>
    `,
  });
};

const sendPasswordResetVerificationCode = async (username, email, code) => {
  await transporter.sendMail({
    from: process.env.ZOHO_MAIL,
    to: email,
    subject: "Password reset verification",
    html: /* hmtl */ `
      <h2>Hello ${username}</h2>
      <p>We've sent this code to this email, cause we got a request to change the password of this account</p>
      <p>Use the following code to reset the password:</p>
      <h3><b>${code}</b></h3>
      </br>
      <p>Salutes, from Thinc Dev Team</p>
    `,
  });
};

const sendPasswordChangedEmail = async (username, email) => {
  await transporter.sendMail({
    from: process.env.ZOHO_MAIL,
    to: email,
    subject: "Password changed sucessfully!",
    html: /* html */ `
      <h2>Hello ${username},</h2>
      <p>We have sucessfully changed your password!</p>
      <p>Go back to the webapp click <a href="https://example.com">here</a>.</p>
      <p>Feel free to contact us if you encounter a problem: thinc-dev@zohomail.com</p>
      </br>
      <p>Salutes, from Thinc Dev Team</p>
    `,
  });
};

export {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetVerificationCode,
  sendPasswordChangedEmail,
};
