const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
	try {
		const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/maruthi-toolings';
		await mongoose.connect(mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected successfully.');
	} catch (error) {
		console.error('MongoDB connection failed:', error.message);
		console.log('Continuing without MongoDB connection...');
		// Don't exit the process, just log the error
	}
};

module.exports = connectDB;