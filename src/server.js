import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product.js';
import connectDatabase from './config/database.js';

const server = express();

server.use(express.json());
server.use('/user', productRoutes);

// server.get('/', (req, res, next) => {
// 	res.status(200).send('hello');
// });
connectDatabase();

server.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT} `);
});
