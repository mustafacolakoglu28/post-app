const router = require("express").Router();
const likeController = require("../controllers/likeController");

router.post("/create", likeController.create);
router.get("/get/:id", likeController.findLike);

module.exports = router;
