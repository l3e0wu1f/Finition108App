const nodemailer = require('nodemailer');

// Créez un transporteur de messagerie
const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'laurine996@gmail.com',
    pass: 'xlwwjaikatvaqrlg'
  }
});

const sendEmail = (subject, text) => {
  const mailOptions = {
    from: 'laurine_vlt@yahoo.fr',
    to: 'laurine.valat@outlook.com',
    subject: subject,
    text: text
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };