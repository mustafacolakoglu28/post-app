const router = require("express").Router();
const commentController = require("../controllers/commentController");

router.post("/create", commentController.create);
router.get("/get/:id", commentController.findComment);

module.exports = router;
