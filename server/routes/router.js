const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller');
/**
 * @description Home route
 * @method GET/ 
 */
route.get("/", services.homeRoutes);


/**
 * @description Route to add user
 * @method GET/add-user
 */
route.get('/add-user', services.addUserRoutes);


/**
 * @description Route to update a user details
 * @method GET/update-user
 */
route.get('/update-user', services.updateUserRoutes);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route