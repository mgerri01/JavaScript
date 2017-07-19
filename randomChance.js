function randomChance(qtrCount){

  for (i = qtrCount; i > 0 ; i--) {
    var chance = Math.random();
    console.log(chance)
      if (chance <0.01) {
        var payout=i+(Math.floor(Math.random()*50)+50);
    console.log("i won")
    console.log(payout, "Quarters Remain")
  }
  }
}
randomChance(100);
