const express = require('express')
const route = express.Router()
const services = require('../services/render')

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


module.exports = route