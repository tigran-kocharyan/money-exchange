// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    answers = {};
    countH = 0;
    countQ = 0;
    countD = 0;
    countN = 0;
    countP = 0;
    if (currency < 0) {
        return {};
    }
    if (currency > 10000) {
        return { "error": "You are rich, my friend! We don't have so much coins for exchange"}
    }

    while(currency>=50) {
        currency-=50;
        countH++;
    }

    while (currency >= 25) {
        currency -= 25;
        countQ++;
    }

    while (currency >= 10) {
        currency -= 10;
        countD++;
    }

    while (currency >= 5) {
        currency -= 5;
        countN++;
    }

    while (currency >= 1) {
        currency -= 1;
        countP++;
    }
    if(countH > 0) {
        answers["H"]=countH;
    }
    if (countQ > 0) {
        answers["Q"] = countQ;
    }
    if (countD > 0) {
        answers["D"] = countD;
    }
    if (countN > 0) {
        answers["N"] = countN;
    }
    if (countP > 0) {
        answers["P"] = countP;
    }
    return answers;
}
