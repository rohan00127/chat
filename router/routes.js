const express = require('express');
const router = express.Router();
const chatcontroller = require("../controller/chatcontroller")

router.get("/" , chatcontroller.chat);

module.exports = router;