const express = require("express");
const router = express.Router();
const { getSummary } = require("../controllers/summaryController");

router.post("/summarize", getSummary);

module.exports = router;