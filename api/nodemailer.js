const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

const stmpTransport = nodemailer.createTransport('SMTP', {
	service: 'Gmail',
	auth: {
		user: 'noreplytigerbook@gmail.com',
		pass: 'Tiger8ook9:40'
	}
})


function sendVerifyEmail(email) {

	const mailOptions = {
		from: 'your name <noreplytigerbook@gmail.com>',
		to: email,
		subject: "Verify Email Account",
		html: "Please verify by clicking this link <a href="#">change later</a>."
	};

	return stmpTransport.sendMail(mailOptios);

}

module.exports = {
	sendVerifyEmail,
};