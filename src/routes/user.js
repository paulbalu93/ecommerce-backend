import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import UserModal from '../models/user.js';
import data from '../data/data.js';
const userRouter = express.Router();

userRouter.post('/', async (req, res, next) => {
	try {
		const user = await UserModal.create(req.body);
		res.send(user);
	} catch (error) {
		next(error);
	}
});

userRouter.post('/signin', async (req, res, next) => {
	try {
		const user = await UserModal.findOne({ email: req.body.email });
		if (user) {
			{
				if (bcrypt.compareSync(req.body.password, user.password)) {
					res.send({
						_id: user.id,
						name: user.name,
						email: user.email,
						isAdmin: user.isAdmin,
						token: generateToken(user),
					});
					return;
				}
			}
			res.status(401).send({ message: 'Invalid email or password' });
		}
	} catch (error) {
		next(error);
	}
});

userRouter.post('/register', async (req, res, next) => {
	try {
		const user = new UserModal({
			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8),
		});
		const createdUser = await user.save();
		res.send({
			_id: createdUser.id,
			name: createdUser.name,
			email: createdUser.email,
			isAdmin: createdUser.isAdmin,
			token: generateToken(user),
		});
	} catch (error) {
		next(error);
	}
});
export default userRouter;
