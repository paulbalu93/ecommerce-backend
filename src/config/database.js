import mongoose from 'mongoose';

const connectDatabase = () => {
	mongoose
		.connect(process.env.MONGO_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() => {
			console.log('Database connected');
		});
};

export default connectDatabase;
