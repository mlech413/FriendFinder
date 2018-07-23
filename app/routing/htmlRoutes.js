
// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  app.get("/survey", function(req, res) {
      console.log("/survey received");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    console.log("* received");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
