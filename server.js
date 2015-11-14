var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var middleware = require("./controllers/middleware.js");
var mainCtrl = require("./controllers/mainCtrl.js");

app.use(middleware.addHeaders);

//GET requests

app.get("/name", mainCtrl.getName);

app.get("/location", mainCtrl.getLocation);

app.get("/occupations", mainCtrl.getOccupations);

app.get("/occupations/latest", mainCtrl.getLatestOccupation);

app.get("/hobbies", mainCtrl.getHobbies);

app.get("/hobbies/:type", mainCtrl.getHobbiesType);

app.get("/skills", mainCtrl.getSkillsByExperience);

app.get('/secrets/:username/:pin', mainCtrl.getSecrets);


//PUT requests

app.put("/name", mainCtrl.updateName);

app.put("/location", mainCtrl.updateLocation);


//POST requests

app.post("/hobbies", mainCtrl.addHobbies);

app.post("/occupations", mainCtrl.addOccupations);

app.post('/skills', mainCtrl.addSkills);
// , middleware.generateId



var port = 8000;

app.listen(port, function () {
	console.log("Listening on port " + port);
});