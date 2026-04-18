const express = require('express');
const router = express.Router();
const l1Controller = require('../../controllers/layer1');

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
router.get('/categories', l1Controller.getCategories);
/**
 * @swagger
 * /v1/layer1/login:
 *   post:
 *     summary: Log in user
 *     tags: [Layer 1]
 *     description: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Success
 *         
 */
router.post('/login', l1Controller.login);
/**
 * @swagger
 * /v1/layer1/signup:
 *  post:
 *   summary: Register a new user
 *   tags: [Layer 1]
 *   description: Register a new user
 *   requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *             required:
 *              - name
 *              - email
 *              - password
 *   responses:
 *       201:
 *         description: Success
 */
router.post('/signup', l1Controller.signup);
module.exports = router;