import mongoose from 'mongoose';

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
