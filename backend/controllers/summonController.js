function performSummon(summonWeight, R, SR, SSR, FSSR) {
  tiers = ["R", "SR", "SSR", "Featured SSR"];
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

  summonWeight.forEach((element) => (summonTotal += element));

  for (var i = 0; i < 9; i++) {
    var type = getTier(summonTotal, summonWeight, tiers);
    jsonData.cards[i].type = type;
    switch (type) {
      case "R":
        jsonData.cards[i].cardNumber = getRandomInt(R);
        break;
      case "SR":
        jsonData.cards[i].cardNumber = getRandomInt(SR);
        break;
      case "SSR":
        jsonData.cards[i].cardNumber = getRandomInt(SSR);
        break;
      default:
        jsonData.cards[i].cardNumber = getRandomInt(FSSR);
        break;
    }
  }

  var guaranteedType = guaranteedSSR(summonWeight);
  jsonData.cards[9].type = guaranteedType;
  if (guaranteedType === "SSR")
    jsonData.cards[9].cardNumber = getRandomInt(SSR);
  else jsonData.cards[9].cardNumber = getRandomInt(FSSR);

  // for (var i = 0; i < 10; i++) {
  //   var randomCard = getRandomInt(summonTotal);
  //   summonWeight.forEach((element) => {
  //     if (randomCard <= element) {
  //       if (randomCard <= summonWeight[2]) {
  //         let randomFeatured = getRandomInt(featuredArray.length);
  //         jsonData.cards[i].type = "Featured SSR";
  //         jsonData.cards[i].cardNumber = getRandomInt(featuredArray.length);
  //       } /*else if (randomCard <= 100) {
  //           let randomUnfeatured = getRandomInt(SSR);
  //            jsonData[`card${i}`] = `SSR`;
  //         }*/ else if (randomCard <= summonWeight[1]) {
  //         jsonData.cards[i].type = "SR";
  //         jsonData.cards[i].cardNumber = getRandomInt(SR);
  //       } else if (randomCard <= summonWeight[0]) {
  //         jsonData.cards[i].type = "R";
  //         jsonData.cards[i].cardNumber = getRandomInt(R);
  //       }
  //     } else randomCard -= element;
  //   });
  // }

  return jsonData;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getTier(summonTotal, summonWeight, tiers) {
  var random = getRandomInt(summonTotal);
  var runningTotal = 0;

  for (var i = 0; i < summonWeight.length; i++) {
    runningTotal += summonWeight[i];
    if (random <= runningTotal) return tiers[i];
  }
}

function guaranteedSSR(summonWeight) {
  var featuredWeight = summonWeight[3];

  var random = getRandomInt(100);

  if (random <= 100 - featuredWeight) return "SSR";
  else return "Featured SSR";
}

module.exports = { performSummon };
