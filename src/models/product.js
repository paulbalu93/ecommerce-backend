import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Please enter product name'],
		trim: true,
		maxLength: [100, 'Length should be less than 100 characters'],
	},
	price: {
		type: Number,
		required: [true, 'please enter product price'],
		maxLength: [5, 'Price cannot exeed 5 numbers'],
		default: 0.0,
	},
	description: { type: String, required: [true, 'Please enter product description'] },
	rating: { type: Number, default: 0 },
	images: [{ public_id: { type: String, required: true }, url: { type: String, required: true } }],
	category: {
		type: String,
		required: [true, 'Please select category for this product'],
		enum: {
			values: [
				'Electronics',
				'Cameras',
				'Laptops',
				'Accessories',
				'Headphones',
				'Food',
				'Books',
				'Clothes/Shoes',
				'Beauty/Health',
				'Sports',
				'Outdoor',
				'Home',
			],
			message: 'Please select correct category for product',
		},
	},
	seller: {
		type: String,
		required: [true, 'Please enter product seller'],
	},
	stock: {
		type: Number,
		required: [true, 'Please enter product stock'],
		maxLength: [5, 'Product name cannot exceed 5 characters'],
		default: 0,
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			//   user: {
			// 	type: mongoose.Schema.ObjectId,
			// 	ref: 'User',
			// 	required: true,
			//   },
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				required: true,
			},
			comment: {
				type: String,
				required: true,
			},
		},
	],
	//   user: {
	// 	type: mongoose.Schema.ObjectId,
	// 	ref: 'User',
	// 	required: true,
	//   },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// import bcrypt from 'bcrypt';
// const { model, Schema } = mongoose;
// const UserSchema = new Schema(
// 	{
// 		firstName: { type: String, required: true, trim: true },
// 		lastName: { type: String, required: true, trim: true },
// 		userName: { type: String, required: true, trim: true, unique: true, index: true, lowercase: true },
// 		email: { type: String, required: true, trim: true, unique: true, lowercase: true },
// 		hashPassword: { type: String, required: true },
// 		role: { type: String, enum: ['user', 'admin'], default: 'admin' },
// 		contactNumber: { type: String },
// 		profilePicture: { type: String },
// 	},
// 	{ timestamps: true }
// );

// UserSchema.virtual('password').set(function (password) {
// 	this.hashPassword = bcrypt.hashSync(password, 10);
// });

// UserSchema.methods = {
// 	authenticate: function (password) {
// 		return bcrypt.compare(password, this.hashPassword);
// 	},
// };
// export default model('User', UserSchema);

export default model('Product', productSchema);
