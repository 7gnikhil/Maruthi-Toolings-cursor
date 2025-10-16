const Inquiry = require('../models/inquiry.model');

exports.getAllInquiries = async (req, res) => {
	try {
		const inquiries = await Inquiry.find().sort({ createdAt: -1 });
		res.json(inquiries);
	} catch (error) {
		res.status(500).json({ message: 'Failed to get inquiries', error });
	}
};

exports.getInquiryById = async (req, res) => {
	try {
		const inquiry = await Inquiry.findById(req.params.id);
		if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
		res.json(inquiry);
	} catch (error) {
		res.status(500).json({ message: 'Failed to get inquiry', error });
	}
};

exports.createInquiry = async (req, res) => {
	try {
		const inquiry = new Inquiry(req.body);
		await inquiry.save();
		res.status(201).json(inquiry);
	} catch (error) {
		res.status(400).json({ message: 'Failed to create inquiry', error });
	}
};

exports.deleteInquiry = async (req, res) => {
	try {
		const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
		if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
		res.json({ message: 'Inquiry deleted' });
	} catch (error) {
		res.status(500).json({ message: 'Failed to delete inquiry', error });
	}
};
