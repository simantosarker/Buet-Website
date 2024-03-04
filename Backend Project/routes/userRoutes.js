const express = require("express");

const router = express.Router();

const userControllers = require("./../controllers/userControllers");

router.route("/").get(userControllers.getUser).post(userControllers.creatUser);

router
  .route("/:user_id")
  .get(userControllers.userOne)
  .patch(userControllers.updateOne)
  .delete(userControllers.deleteOne);

module.exports = router;
