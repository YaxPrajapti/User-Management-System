const axios = require('axios');


exports.homeRoutes = (req, res) => {
    console.log("Application started.")
    /**
     * @description Make a get request to /api/users to get data from the database 
     */
    axios.get('http://localhost:8080/api/users')
        .then(function (response) {
            res.render('index', { users: response.data })
        }).catch(err => {
            res.status(500).send(`An error occured while retrieving the user informations.`)
        })

}


exports.addUserRoutes = (req, res) => {
    console.log("Requested to add a new user.");
    res.render('add_user')
}


exports.updateUserRoutes = (req, res) => {
    console.log("Requested to update a user.");
    axios.get('http://localhost:8080/api/users', {params: {id: req.query.id}})
    .then(function(userdata) {
        res.render('update_user', {user: userdata.data})
    }).catch(err => {
        res.status(500).send({message: `User update operation failed.`})
    })
}