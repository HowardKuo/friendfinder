    
var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    //console.log(req.body.scores);
    var bfReturn;
    var minDif;
    var input = req.body;

    for(var i = 0; i < input.scores.length; i++) {
      input.scores[i] = parseInt(input.scores[i]);
    }

    for(var i = 0; i < friends.length; i++) {
      var totalDif = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var dif = Math.abs(input.scores[j] - friends[i].scores[j]);
        totalDif = totalDif + dif;
      }

      if(totalDif < minDif) {
        bfReturn = i;
        minDif = totalDif;
      }
    }

    friends.push(user);

    res.json(friends[bfReturn]);
  });
}