import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
import { createTransport } from 'nodemailer';

const transport = createTransport({
  host: "smtp.gmail.com",
  port:587,  // e.g., smtp.example.com                // true for 465, false for other ports
    auth: { 
        user: process.env.MAIL_USER, // your email address
        pass: process.env.MAIL_PASS  // your email password
    }   
});


export const sendMail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: process.env.MAIL_USER, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    };

    const info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}   