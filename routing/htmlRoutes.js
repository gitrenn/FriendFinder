// Dependencies

var path = require("path");


// Sets up the Express app to handle data parsing



// Routes 
// Basic route

module.exports = function(app) {
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
};

