const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.get("/:id", itemController.selectOne);
router.post("/", itemController.createOne)
router.put("/:id", itemController.updateOne)
router.delete("/:id", itemController.deleteOne)

module.exports = router;
