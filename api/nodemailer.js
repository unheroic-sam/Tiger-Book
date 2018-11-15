const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

const stmpTransport = nodemailer.createTransport('SMTP', {
	service: 'Gmail',
	auth: {
		user: 'Gmail ID',
		pass: 'Gmail Pass'
	}
})


function sendVerifyEmail(email) {

	const mailOptions = {
		from: 'your name <email>',
		to: email,
		subject: "Verify Email Account",
		html: "Please verify by clicking this link <a href="#">change later</a>."
	};

	return stmpTransport.sendMail(mailOptios);

}

function differentEmailThing() {
	
}

module.exports = {
	sendVerifyEmail,
	differentEmailThing
};