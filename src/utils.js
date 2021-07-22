import jwt from 'jsonwebtoken';
export const generateToken = (user) => {
	//sign has 3 parts - userobject, jwt secret and
	return jwt.sign(
		{ _id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin },
		process.env.JWT_SECRET,
		{ expiresIn: '30d' }
	);
};
