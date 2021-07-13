import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log('Database connected');
});

const server = express();

server.use(express.json());
server.use('/user', userRoutes);

server.get('/', (req, res, next) => {
	res.status(200).send('hello');
});

server.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT} `);
});
