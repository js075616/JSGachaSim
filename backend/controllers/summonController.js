function performSummon(featuredArray, summonWeight, SSR, SR, R) {
  var jsonData = {
    cards: [
      { id: "card0", type: "", cardNumber: 0 },
      { id: "card1", type: "", cardNumber: 0 },
      { id: "card2", type: "", cardNumber: 1 },
      { id: "card3", type: "", cardNumber: 1 },
      { id: "card4", type: "", cardNumber: 1 },
      { id: "card5", type: "", cardNumber: 1 },
      { id: "card6", type: "", cardNumber: 1 },
      { id: "card7", type: "", cardNumber: 1 },
      { id: "card8", type: "", cardNumber: 1 },
      { id: "card9", type: "", cardNumber: 1 },
    ],
  };
  var summonTotal = 0;

  summonWeight.forEach((element) => (summonTotal += element));

  for (var i = 0; i < 10; i++) {
    var randomCard = getRandomInt(summonTotal);
    summonWeight.forEach((element) => {
      if (randomCard <= element) {
        if (randomCard <= summonWeight[2]) {
          jsonData.cards[i].type = "Featured SSR";
          jsonData.cards[i].cardNumber = getRandomInt(featuredArray.length);
        } /*else if (randomCard <= summonWeight[2]) {
           jsonData.cards[i].type = "SSR";
          jsonData.cards[i].cardNumber = getRandomInt(SSR);
          }*/ else if (randomCard <= summonWeight[1]) {
          jsonData.cards[i].type = "SR";
          jsonData.cards[i].cardNumber = getRandomInt(SR);
        } else if (randomCard <= summonWeight[0]) {
          jsonData.cards[i].type = "R";
          jsonData.cards[i].cardNumber = getRandomInt(R);
        }
      } else randomCard -= element;
    });
  }
  return jsonData;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = { performSummon };
