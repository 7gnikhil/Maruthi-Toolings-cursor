const Product = require('../models/product.model');

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find().sort({ createdAt: -1 });
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: 'Failed to get products', error });
	}
};

exports.getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json(product);
	} catch (error) {
		res.status(500).json({ message: 'Failed to get product', error });
	}
};

exports.createProduct = async (req, res) => {
	try {
		const product = new Product(req.body);
		await product.save();
		res.status(201).json(product);
	} catch (error) {
		res.status(400).json({ message: 'Failed to create product', error });
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		);
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json(product);
	} catch (error) {
		res.status(400).json({ message: 'Failed to update product', error });
	}
};

exports.deleteProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json({ message: 'Product deleted' });
	} catch (error) {
		res.status(500).json({ message: 'Failed to delete product', error });
	}
};