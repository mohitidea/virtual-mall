const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/layer1');

// GET all categories
/**
 * @swagger
 * /v1/layer1/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Layer 1]
 *     description: Fetch all categories from database
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/categories', categoryController.getCategories);
module.exports = router;