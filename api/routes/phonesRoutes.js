const express = require("express");
const router = express.Router();
const { getPhones } = require("../controller/phonesController");

router.route("/").get(getPhones);

module.exports = router;
