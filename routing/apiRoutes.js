// load data 

var friendsData = require("../app/data/friends");

// routing 
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        req.body.scores.map(Number);
        friendsData.push(req.body);
        res.json(true);
    })
}



