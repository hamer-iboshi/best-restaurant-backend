const express = require('express');
const RestaurantController = require('./controllers/RestaurantController');
const routes = express.Router();

routes.get('/categories',RestaurantController.listCategories);

module.exports = routes;