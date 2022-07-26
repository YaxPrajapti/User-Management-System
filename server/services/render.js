
exports.homeRoutes = (req, res) => {
    console.log("Application started.")
    res.render('index')
}


exports.addUserRoutes = (req, res) => {
    console.log("Requested to add a new user.");
    res.render('add_user')
}


exports.updateUserRoutes = (req, res) => {
    console.log("Requested to update a user.");
    res.render('update_user')
}