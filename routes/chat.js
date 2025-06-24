const express = require("express");
const router = express.Router();
const aiLimiter = require("../middlewares/rateLimiter");
const chatController = require("../controllers/chat");
const handleErrorAsync = require("../utils/handleErrorAsync");

router.post("/", aiLimiter, handleErrorAsync(chatController.postChat));

module.exports = router;
