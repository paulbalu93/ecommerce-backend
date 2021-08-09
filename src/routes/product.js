import express from "express";
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";
import ProductModel from "../models/product.js";
import data from "../data/data.js";
const productRouter = express.Router();

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await ProductModel.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await ProductModel.find({});
    res.send(products);
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);
// router.post('/signin', (req, res) => {});

// router.post('/signup', (req, res) => {
// 	// User.findOne({ email: req.body.email }).exec((error, user) => {
// 	// 	if (user) return res.status(400).send('User already registered');
// 	// });
// 	// const {firstName, lastName, }
// 	// const _user = new User({
// 	// })
// });
// productsRouter.get("/:id", (req, res, next) => {
//   try {
//     const product = data.products.find((x) => x._id === req.params.id);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: "Product not found" });
//     }
//   } catch (error) {
//     next(error);
//   }
// });
// productsRouter.get("/", async (req, res, next) => {
//   try {
//     // const products = await ProductModel.find();
//     res.send(data.products);
//   } catch (error) {
//     next(error);
//   }
// });

// productsRouter.get(
//   "/:id",
//   expressAsyncHandler(async (req, res, next) => {
//     const product = await ProductModel.findById();

//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: "Product not found" });
//     }
//   })
// );

// productsRouter.post("/", async (req, res, next) => {
//   try {
//     const product = await ProductModel.create(req.body);

//     res.status(201).send(product);
//   } catch (error) {
//     next(error);
//   }
// });
export default productRouter;
