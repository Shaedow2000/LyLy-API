import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail = async (email, code) => {
  await resend.emails.send({
    from: "noreply@lyly.dev",
    to: email,
    subject: "Email verification",
    text: `Use the following code to verify your email address: ${code}`,
  });
};

export default sendVerificationEmail;
