const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiry.controller');

router.get('/', inquiryController.getAllInquiries);
router.get('/:id', inquiryController.getInquiryById);
router.post('/', inquiryController.createInquiry);
router.delete('/:id', inquiryController.deleteInquiry);

module.exports = router;