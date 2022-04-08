function performSummon(featuredArray, summonWeight, SSR, SR, R) {
  var jsonData = {};
  var summonTotal = 0;

  summonWeight.forEach((element) => (summonTotal += element));

  for (var i = 0; i < 10; i++) {
    var randomCard = getRandomInt(summonTotal);
    summonWeight.forEach((element) => {
      if (randomCard <= element) {
        if (randomCard <= summonWeight[2]) {
          let randomFeatured = getRandomInt(featuredArray.length);
          jsonData[`card${i}`] = `Featured SSR ${randomFeatured}`;
        } /*else if (randomCard <= 100) {
            let randomUnfeatured = getRandomInt(SSR);
             jsonData[`card${i}`] = `SSR`;
          }*/ else if (randomCard <= summonWeight[1]) {
          let randomSR = getRandomInt(SR);
          jsonData[`card${i}`] = `SR ${randomSR}`;
        } else if (randomCard <= summonWeight[0]) {
          let randomR = getRandomInt(R);
          jsonData[`card${i}`] = `R ${randomR}`;
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
