
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oumaimahajji9@gmail.com',
    pass: 'xxxxxxxxxxx '
  }
});


const mailOptions = {
  from: 'oumaimahajji9@gmail.com',
  to: 'hajjioumaima75@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error: ' + err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
