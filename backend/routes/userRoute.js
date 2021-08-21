const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/create", userController.create);
router.get("/get/:id", userController.findUser);

module.exports = router;
