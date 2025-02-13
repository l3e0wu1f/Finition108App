const nodemailer = require('nodemailer');

// Créez un transporteur de messagerie
const transporter = nodemailer.createTransport({
  service: 'microsoft',
  auth: {
    user: 'admin@finition108.io',
    pass: 'Cuddles$108'
  }
});

const sendEmail = (subject, text) => {
  const mailOptions = {
    from: 'admin@finition108.io',
    to: 'admin@finition108.io',
    subject: subject,
    text: text
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
