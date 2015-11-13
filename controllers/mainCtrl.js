var personalInfo = {
		"name": "Erin",
		"location": "Provo",
		"occupations": ["library", "ancestry", "multiling"],
		"hobbies": [
			{"name": "cycling",
			"type": "current"},
			{"name": "reading",
			"type": "current"},
			{"name": "taekwondo",
			"type": "past"}
		]
	}
	
module.exports = {
	
	
	//GET requests
	getName: function (req, res, next) {
		res.status(200).json(personalInfo.name);		
	},
	
	getLocation: function (req, res, next) {
		res.status(200).json(personalInfo.location);
	},
	
	getOccupations: function (req, res, next) {
		if (req.query.order) {
			if (req.query.order === "desc") {
				personalInfo.occupations.sort().reverse();
			}
			else {
				personalInfo.occupations.sort();
			}
		}
		
		res.status(200).json(personalInfo.occupations);	
	},
	
	getLatestOccupation: function (req, res, next) {
		res.status(200).json(personalInfo.occupations[personalInfo.occupations.length-1]);
	},
	
	getHobbies: function (req, res, next) {
		res.status(200).json(personalInfo.hobbies);
	},
	
	getHobbiesType: function (req, res, next) {
		var hobbyType = req.params.type;
		var hobbiesByType = [];
		
		for (var i = 0; i < personalInfo.hobbies.length; i++) {
			if (req.params.type === personalInfo.hobbies[i].type) {
				hobbiesByType.push(personalInfo.hobbies[i].name);		
			}
		};
		res.status(200).json(hobbiesByType);
	},
	
	//PUT requests
	
	updateName: function (req, res, next) {
		personalInfo.name = req.body.name;
		res.send({name: personalInfo.name});
	},
	
	updateLocation: function (req, res, next) {
		personalInfo.location = req.body.location;
		res.send({location: personalInfo.location});
	},
	
	
	//POST requests  
	
	addHobbies: function (req, res, next) {
		personalInfo.hobbies.push(req.body);
		res.send(personalInfo.hobbies);
	},
	
	addOccupations: function (req, res, next) {
		personalInfo.occupations.push(req.body.occupations);
		res.send(personalInfo.occupations);
	}
	
	
};