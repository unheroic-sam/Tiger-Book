const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs')
const knex = require('knex');

const mailer = require('nodemailer');

const db = knex({
	client: 'pg',
	connection: {
		host: 'tigerbookdb.cd7v1sp0q4f1.us-east-2.rds.amazonaws.com',
		user: 'Tigerbook',
		password: 'Tiger8ook9:40',
		database: 'postgres'
	}
})

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/signin', (req,res) => {
	db.select('email', 'hash').from('login')
		.where('email', '=', req.body.email)
		.then(data => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
			if(isValid) {
				return db.select('*').from('users')
					.where('email', '=', req.body.email)
					.then(user => {
						res.json(user[0])
					})
				.catch(err => res.status(400).json('Unable to get user'))
			} else {
				res.status(400).json({
					'message': 'Wrong credentials'
				})
			}
		})
		.catch(err => res.status(400).json({
					'message': 'Wrong credentials'
				}))
})

app.post('/register', (req,res) => {
	const {name, email, password} = req.body;
	const hash = bcrypt.hashSync(password);
		db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
					.returning('*')
					.insert({
						email: loginEmail[0],
						name: name,
						joined: new Date()
					})
					.then(user => {

						mailer.sendVerifyEmail(email).then((err, response) => {
							return res.json(user[0])
						});

					})
					.catch(err => res.json({
						message: 'could not save user'
					}))
			})
			.then(trx.commit)
			.catch(trx.rollback)
		})
		.catch(err => res.status(400).json('Unable to register user'))
})

app.post('/submitPost', (req,res) => {
	const post = db.insert({
		user_id: req.body.user_id,
		community_id: req.body.community_id,
		title: req.body.title,
		created: new Date(),
		content: req.body.content
	}).into('posts').then(d => {
		return res.json([]);
	})
})

app.get('/getPosts', (req,res) => {

	const query = db.select('*').from('posts').orderBy('created', 'desc');

	if(req.query.user_id) {
		query.where('user_id', '=', req.query.user_id)
	}
	
	query.then(posts => {
			Promise.all(posts.map(post => {
				return db.select('name', 'profile_picture').from('users').where('id', '=', post.user_id)
				.first()
				.then(user => {
					post.user = user;
					return post
				})
			})).then(response => {
				return res.json(posts)
			})
		})
})

app.listen(3000, () => {
	console.log('app is running on port 3000');
})