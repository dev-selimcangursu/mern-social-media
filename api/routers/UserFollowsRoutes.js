const express = require("express");
const router = express.Router();
const UserFollowsController = require("../controllers/UserFollowsController");

// Takipçi & Takip Edilen Sayı
router.post("/count", UserFollowsController.followsCount);

module.exports = router;
