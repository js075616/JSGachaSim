const express = require("express");
const summon = require("../controllers/summonController");
const router = express.Router();

router.get("/firstbanner", (req, res) => {
  res.status(200).json(summon.performSummon([30, 60, 5, 5], 15, 10, 10, 7));
});

module.exports = router;
