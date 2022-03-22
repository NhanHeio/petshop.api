var nodemailer = require('nodemailer');


const sendEmail = (email, subject, html) => {
    var transporter = nodemailer.createTransport({
        host: 'localhost:8080',
        port: 587,
        secure: false,
        service: 'gmail',
        auth: {
            user: 'nhanb1805898@student.ctu.edu.vn',
            pass: 'aHKn6pAf'
        }
    });

    var mailOptions = {
        from: '"PetShop" <nhanb1805898@student.ctu.edu.vn>',
        to: email,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            console.log('Preview URL : %s', nodemailer.getTestMessageUrl(info));
        }
    });
}

module.exports = {
    sendEmail: sendEmail
}
