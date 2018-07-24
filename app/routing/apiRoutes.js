var friends = require("../data/friends");

module.exports = function(app) {
    // API GET Request  
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    // API POST Request
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
    });
};