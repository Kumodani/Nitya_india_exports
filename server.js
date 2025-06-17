import {config} from 'dotenv' ; // Load environment variables from .env file]
config(); // Load environment variables from .env file

import express from 'express';
import send from 'send';
import cors from 'cors';
import { sendMail } from './mail.js'; // Assuming you have a mail.js file for sending emails
const app = express();

app.use(cors())

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/query', async (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  await sendMail("nityaindiaexports@gmail.com", 'New Query Received', JSON.stringify(data));

  res.status(200).json({ message: 'Your enquiry has been received', data });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

