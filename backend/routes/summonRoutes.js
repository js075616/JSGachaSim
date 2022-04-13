const express = require("express");
const summon = require("../controllers/summonController");
const router = express.Router();

router.get("/dfbanner", (req, res) => {
  res.status(200).json(summon.performSummon([30, 60, 5, 5], 40, 140, 236, 7));
});

router.get("/rdbanner", (req, res) => {
  res.status(200).json(summon.performSummon([0, 80, 10, 10], 0, 140, 261, 12));
});

module.exports = router;
