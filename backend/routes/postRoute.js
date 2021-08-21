const router = require("express").Router();
const postController = require("../controllers/postController");

router.post("/create", postController.create);
router.get("/get/:id", postController.findPost);

module.exports = router;
