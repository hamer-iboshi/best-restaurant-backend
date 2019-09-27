const express = require('express');
const RestaurantController = require('./controllers/RestaurantController');
const routes = express.Router();

routes.get('/',RestaurantController.index);
routes.get('/categories',RestaurantController.listCategories);
routes.get('/best_near',RestaurantController.bestNearRestaurants);

module.exports = routes;