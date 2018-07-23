var friends = require("../data/friends");

module.exports = function(app) {
    console.log("apiRoutes");
    // API GET Request  
    app.get("/api/friends", function(req, res) {
        console.log("get friends=" + friends);
        res.json(friends);
    });
  
  
    // API POST Request
    app.post("/api/friends", function(req, res) {
        console.log("post friends=" + friends);
        friends.push(req.body);
    });
};