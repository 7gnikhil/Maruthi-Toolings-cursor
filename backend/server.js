const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/services', require('./routes/service.routes'));
app.use('/api/careers', require('./routes/career.routes'));
app.use('/api/inquiries', require('./routes/inquiry.routes'));

app.get('/', (req, res) => {
	res.send('Maruthi Toolings API is running');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});