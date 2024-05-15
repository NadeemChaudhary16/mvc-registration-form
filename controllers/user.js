const User = require("../models/user");

const getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        if (users.length > 0) {
            res.render("users.ejs", { users });
        } else {
            res.render("error.ejs");
        }
    } catch (error) {
        console.log(error);
        res.render("error.ejs");
    }
};

const renderNewUserForm = (req, res) => {
    res.render("registrationForm.ejs");
};

const createUser = (req, res) => {
    const { name, state, city } = req.body;
    const newUser = new User({ name, state, city });
    newUser.save()
        .then(() => {
            res.redirect("/users");
        })
        .catch((error) => {
            console.log(error);
        });
};

const renderEditUserForm = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findById(id);
        res.render("edit.ejs", { user });
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let { name, state, city } = req.body;
        let updateUser = await User.findByIdAndUpdate(id, { name, state, city }, { runValidators: true });
        res.redirect("/users");
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        let delUser = await User.findByIdAndDelete(id);
        console.log(delUser);
        res.redirect("/users");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUsers,
    renderNewUserForm,
    createUser,
    renderEditUserForm,
    updateUser,
    deleteUser
};
