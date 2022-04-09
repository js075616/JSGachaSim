const express = require("express");
const summon = require("../controllers/summonController");
const router = express.Router();

router.get("/firstbanner", (req, res) => {
  res
    .status(200)
    .json(summon.performSummon([1, 2, 3], [700, 250, 50], 0, 5, 10));
});

module.exports = router;
