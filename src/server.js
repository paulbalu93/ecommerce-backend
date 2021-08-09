import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import connectDatabase from "./config/database.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/products", productRoutes);
server.use("/users", userRoutes);

server.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
// server.get('/', (req, res, next) => {
// 	res.status(200).send('hello');
// });
connectDatabase();

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
