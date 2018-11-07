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


