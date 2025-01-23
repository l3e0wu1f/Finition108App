// const { sendEmail } = require('../utils/mailer.js');
const nodemailer = require('nodemailer');
const mailGen = require('mailgen')
const {EMAIL, PASSWORD} = require('../env.js')



function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

exports.submitContactForm = async (req, res) => {
    console.log('localhost:3000/contact-form')
    const { name, email, phone, job_needed, budget, deposit_file, description } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({msg: "Invalid email address"})
    }

    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new  mailGen({
        theme: "default",
        product : {
            name: "Finition108",
            link: "http://localhost:3000"
        }
    }) 
    const output = `

        <h3>Nouveau client potentiel</h3>
        <p>Un client a rempli le formulaire de contact. Voici ses informations :</p>
        <ul> 
        <li>Nom: ${name}</li>
        <li>Email: ${email}</li>
        <li>Téléphone: ${phone}</li>
        <li>Job demandé: ${job_needed}</li>
        <li>Budget: ${budget}</li>

        </ul>
        <h3>Message:</h3>
        <p>${description}</p>

        <p>${req.file || req.files ? 'Le client a envoyé un ou plusieurs fichiers, ils sont en pièce jointe' : "Le client n'a pas envoyé de fichiers."}</p>
    `;

    let message = {}
    if (req.file) {
        message ={
            from: EMAIL,
            to : EMAIL,
            subject: `Nouveau client potentiel : ${name}`,
            html: output,
            attachments: [
                {
                  filename: req.file?.originalname, // File name from the upload
                  content: req.file?.buffer, // File content as a buffer
                  contentType: req.file?.mimetype, // Mime type of the file (e.g., 'image/jpeg', 'application/pdf')
                },
            ]
        }   
    } else if (req.files) {
        let attachments = []
        for (file of req.files) {
            attachments.push({
                filename: file.originalname, // File name from the upload
                content: file.buffer, // File content as a buffer
                contentType: file.mimetype, // Mime type of the file (e.g., 'image/jpeg', 'application/pdf')
            })
        }
        message ={
            from: EMAIL,
            to : EMAIL,
            subject: `New potential client : ${name}`,
            html: output,
            attachments: attachments,
        }
    } else {
        message ={
            from: EMAIL,
            to : 'admin@finition108.io',
            subject: `New potential client : ${name}`,
            html: output,
        }  
    }
    transporter.sendMail(message).then((info) => {
        res.status(201).json({ 
            msg: 'You should receive an email'
        });
    }).catch(error => {
        return res.status(500).json({error})
    })
  };