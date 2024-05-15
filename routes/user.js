const express = require("express");
const router = express.Router();
const {getAllUsers} =require("../controllers/user")
const {createUser} =require("../controllers/user")
const {renderNewUserForm} =require("../controllers/user")
const {renderEditUserForm} =require("../controllers/user")
const {updateUser} =require("../controllers/user")
const {deleteUser} =require("../controllers/user")

// Rest API/Routes 
router.get("/", getAllUsers);

router.get("/new", renderNewUserForm);

router.post("/", createUser);

router.get("/:id/edit", renderEditUserForm);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
