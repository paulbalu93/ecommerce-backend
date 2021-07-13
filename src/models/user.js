import mongoose, { model } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		userName: { type: String, required: true, trim: true, unique: true, index: true, lowercase: true },
		email: { type: String, required: true, trim: true, unique: true, lowercase: true },
		hashPassword: { type: String, required: true },
		role: { type: String, enum: ['user', 'admin'], default: 'admin' },
		contactNumber: { type: String },
		profilePicture: { type: String },
	},
	{ timestamps: true }
);

UserSchema.virtual('password').set(function (password) {
	this.hashPassword = bcrypt.hashSync(password, 10);
});

UserSchema.methods = {
	authenticate: function (password) {
		return bcrypt.compare(password, this.hashPassword);
	},
};
export default model('User', UserSchema);
