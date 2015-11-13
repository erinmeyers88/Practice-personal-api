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
	
	getName: function (req, res, next) {
		res.status(200).json(personalInfo.name);		
	},
	
	getLocation: function (req, res, next) {
		res.status(200).json(personalInfo.location);
	},
	
	getOccupations: function (req, res, next) {
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
	} 
	
	
};