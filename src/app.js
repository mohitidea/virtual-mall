const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors    = require('cors');
const morgan  = require('morgan');

const app = express();

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Virtual Mall API',
      version: '1.0.0',
      tags: [
        {
          name: 'Layer 1',
          description: 'Operations related to Layer 1'
        }
      ],
      description: 'API documentation for Virtual Mall',
    },
  },
  apis: ['./src/routes/v1/**.js'], // Path to the API docs
};
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const l1Routes = require('./routes/v1/layer1');
app.use('/v1/layer1', l1Routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;