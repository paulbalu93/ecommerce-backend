import express from 'express';

const server = express();

server.get('/', (req, res, next) => {
	res.status(200).send('hello');
});

server.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT} `);
});
