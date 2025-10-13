const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
	position: { type: String, required: true },
	description: String,
	qualifications: String,
	location: String,
	createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Career', careerSchema);