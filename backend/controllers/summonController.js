const asyncHandler = require("express-async-handler");

const Card = require("../models/cardModel");

const getCards = asyncHandler(async (req, res) => {
  const cards = await Card.find();

  res.status(200).json(cards);
});

const setCard = asyncHandler(async (req, res) => {
  if (!req.body.cardId || !req.body.name) {
    res.status(400).json({ Error: "Missing name or cardId" });
  }

  const card = await Card.create({
    cardId: req.body.cardId,
    name: req.body.name,
    rarity: req.body.rarity,
    atk: req.body.atk,
    def: req.body.def,
    passive: req.body.passive,
    leader: req.body.leader,
  });

  res.status(200).json(card);
});

const performSummon = asyncHandler(async (req, res) => {
  tiers = ["R", "SR", "SSR", "Featured SSR"];
  summonWeight = [37, 60, 0, 3];
  var jsonData = {
    cards: [
      { id: "card0", revealed: false },
      { id: "card1", revealed: false },
      { id: "card2", revealed: false },
      { id: "card3", revealed: false },
      { id: "card4", revealed: false },
      { id: "card5", revealed: false },
      { id: "card6", revealed: false },
      { id: "card7", revealed: false },
      { id: "card8", revealed: false },
      { id: "card9", revealed: false },
    ],
  };
  var summonTotal = 0;

  // for (var i = 0; i < 10; i++) {
  //   var card = await Card.find({ cardId: getRandomIntRange(1, 10) });
  //   // console.log(card);
  //   // jsonData.cards[0].cardNumber = card[0].cardId;
  //   jsonData.cards[i].name = card[0].name;
  //   jsonData.cards[i]._id = card[0]._id;
  //   jsonData.cards[i].type = card[0].rarity;
  //   jsonData.cards[i].atk = card[0].atk;
  //   jsonData.cards[i].def = card[0].def;
  //   jsonData.cards[i].passive = card[0].passive;
  //   jsonData.cards[i].leader = card[0].leader;
  // }

  summonWeight.forEach((element) => (summonTotal += element));

  for (var i = 0; i < 10; i++) {
    var type = getTier(summonTotal, summonWeight, tiers);
    jsonData.cards[i].type = type;
    switch (type) {
      case "R":
        var card = await Card.find({ cardId: getRandomIntRange(1, 10) });
        jsonData.cards[i].name = card[0].name;
        jsonData.cards[i]._id = card[0]._id;
        jsonData.cards[i].type = card[0].rarity;
        jsonData.cards[i].atk = card[0].atk;
        jsonData.cards[i].def = card[0].def;
        jsonData.cards[i].passive = card[0].passive;
        jsonData.cards[i].leader = card[0].leader;
        break;
      case "SR":
        var card = await Card.find({ cardId: getRandomIntRange(101, 110) });
        jsonData.cards[i].name = card[0].name;
        jsonData.cards[i]._id = card[0]._id;
        jsonData.cards[i].type = card[0].rarity;
        jsonData.cards[i].atk = card[0].atk;
        jsonData.cards[i].def = card[0].def;
        jsonData.cards[i].passive = card[0].passive;
        jsonData.cards[i].leader = card[0].leader;
        break;
      // case "SSR":
      //   jsonData.cards[i].cardNumber = getRandomIntRange(1, 10);
      //   jsonData.cards[i].name = card[0].name;
      //   jsonData.cards[i]._id = card[0]._id;
      //   jsonData.cards[i].type = card[0].rarity;
      //   jsonData.cards[i].atk = card[0].atk;
      //   jsonData.cards[i].def = card[0].def;
      //   jsonData.cards[i].passive = card[0].passive;
      //   jsonData.cards[i].leader = card[0].leader;
      //   break;
      default:
        var card = await Card.find({ cardId: getRandomIntRange(201, 203) });
        jsonData.cards[i].name = card[0].name;
        jsonData.cards[i]._id = card[0]._id;
        jsonData.cards[i].type = "Featured SSR";
        jsonData.cards[i].atk = card[0].atk;
        jsonData.cards[i].def = card[0].def;
        jsonData.cards[i].passive = card[0].passive;
        jsonData.cards[i].leader = card[0].leader;
        break;
    }
  }

  // var guaranteedType = guaranteedSSR(summonWeight);
  // jsonData.cards[9].type = guaranteedType;
  // if (guaranteedType === "SSR")
  //   jsonData.cards[9].cardNumber = getRandomInt(SSR);
  // else jsonData.cards[9].cardNumber = getRandomInt(FSSR);

  res.status(200).json(jsonData);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomIntRange(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

function getTier(summonTotal, summonWeight, tiers) {
  var random = getRandomInt(summonTotal);
  var runningTotal = 0;

  for (var i = 0; i < summonWeight.length; i++) {
    runningTotal += summonWeight[i];
    if (random < runningTotal) return tiers[i];
  }
}

function guaranteedSSR(summonWeight) {
  var featuredWeight = summonWeight[3];

  var random = getRandomInt(100);

  if (random <= 100 - featuredWeight) return "SSR";
  else return "Featured SSR";
}

module.exports = { performSummon, setCard, getCards };
