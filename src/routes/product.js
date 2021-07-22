import express from 'express';
import mongoose from 'mongoose';
import expressAsyncHandler from 'express-async-handler';
import ProductModel from '../models/product.js';
const productsRouter = express.Router();

// router.post('/signin', (req, res) => {});

// router.post('/signup', (req, res) => {
// 	// User.findOne({ email: req.body.email }).exec((error, user) => {
// 	// 	if (user) return res.status(400).send('User already registered');
// 	// });
// 	// const {firstName, lastName, }
// 	// const _user = new User({
// 	// })
// });

productsRouter.get('/', async (req, res, next) => {
	try {
		const products = await ProductModel.find();
		res.send(products);
	} catch (error) {
		next(error);
	}
});

productsRouter.get(
	'/:id',
	expressAsyncHandler(async (req, res, next) => {
		const product = await ProductModel.findById();

		if (product) {
			res.send(product);
		} else {
			res.status(404).send({ message: 'Product not found' });
		}
	})
);

productsRouter.post('/', async (req, res, next) => {
	try {
		const product = await ProductModel.create(req.body);

		res.status(201).send(product);
	} catch (error) {
		next(error);
	}
});
export default productsRouter;
