const userdb = require('../model/model');

/**
 * @description create a new user.
 */
exports.create = (req, res) => {
    //validate the request
    if (!req.body) {
        return res.status(400).send({ message: "Form field can not be empty!!" });
    }
    else {
        //new user
        const user = new userdb({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        })

        //save the user to database.
        user
            .save(user)
            .then(data => {
                // res.send(data);
                res.redirect('http://localhost:8080')
            }).catch(err => {
                res.status(500).send({ message: err.message || "An error occured while performing the create operation." })
            })
    }
};
/**
 * @description retrieve and return all users OR retrieve and return single user.
 */
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Details not found with id ${id}` })
                }
                else {
                    res.send(data);
                }
            }).catch(err => {
                res.status(500).send({ message: `An error occured while retrieving user information.` })
            })
    } else {
        userdb.find()
            .then(user => {
                res.send(user)
            }).catch(err => {
                res.status(500).send({ message: err.message || "An error occured while retrieving the user information. 😑" })
            })
    }
}

/**
 * @description update user details using user id
 */
exports.update = async (req, res) => {
    try {
        if (!req.body) {
            return res
                .status(400)
                .send({ message: "Data to update can not be empty" })
        } else {
            const id = req.params.id;
            const user = await userdb.findOne({ _id: id });
            const update = req.body;
            await user.updateOne(update);
            const updatedUser = await userdb.findOne({ _id: id });
            console.log(updatedUser);
            
        }
    } catch (error) {
        res.status(500).send({ message: "An error occured while updating user." });
    }
}


/**
 * @description delete user details using user id
 */
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        // await userdb.deleteOne({ _id: id });
        const user = await userdb.findOne({ _id: id });
        await user.deleteOne(user);
        res.send(`User details are deleted`);
    } catch (error) {
        res.status(500).send(`An error occured while deleting the information with ${id}`);
    }
}