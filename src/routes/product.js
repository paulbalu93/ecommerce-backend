import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/signin', (req, res) => {});

router.post('/signup', (req, res) => {
	// User.findOne({ email: req.body.email }).exec((error, user) => {
	// 	if (user) return res.status(400).send('User already registered');
	// });
	// const {firstName, lastName, }
	// const _user = new User({
	// })
});

export default router;
