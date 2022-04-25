const express = require("express");
const router = express.Router();
const {
  performSummon,
  getCards,
  setCard,
} = require("../controllers/summonController");

router.get("/summon/dfbanner", (req, res) => {
  res.status(200).json(performSummon([30, 60, 5, 5], 40, 140, 236, 7));
});

router.get("/summon/rdbanner", (req, res) => {
  res.status(200).json(performSummon([0, 80, 10, 10], 0, 140, 261, 12));
});

router.get("/cards", getCards);

router.post("/cards", setCard);

module.exports = router;
