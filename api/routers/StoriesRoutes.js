const express = require("express");
const router = express.Router();
const StoriesController = require("../controllers/StoriesController");

// Takipçi & Takip Edilen Sayı
router.get("/get", StoriesController.getStories);

module.exports = router;
