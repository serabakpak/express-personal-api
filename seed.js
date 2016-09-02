// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var destinations_list = [
	{
	name: "Machu Picchu",
	country: "Peru",
	image: "https://cdn.getyourguide.com/niwziy2l9cvz/5lcTJjACzKCQo0AWk4eM6a/9eb008b6e9e3752dd17c1a7c83b2d6b8/peru-machu-picchu-004.jpg",
	description: "3 wolf moon kickstarter intelligentsia tousled viral bitters. Pitchfork DIY banh mi pinterest vegan chia. YOLO artisan vegan forage biodiesel. Fanny pack ugh roof party, scenester blue bottle meditation tacos food truck marfa portland forage gochujang. Pour-over crucifix helvetica kitsch. Fingerstache gochujang tattooed tilde. Stumptown taxidermy yr microdosing, heirloom gluten-free affogato aesthetic pinterest bicycle rights."
	},
	{
	name: "Machu Picchu",
	country: "Peru",
	image: "https://cdn.getyourguide.com/niwziy2l9cvz/5lcTJjACzKCQo0AWk4eM6a/9eb008b6e9e3752dd17c1a7c83b2d6b8/peru-machu-picchu-004.jpg",
	description: "3 wolf moon kickstarter intelligentsia tousled viral bitters. Pitchfork DIY banh mi pinterest vegan chia. YOLO artisan vegan forage biodiesel. Fanny pack ugh roof party, scenester blue bottle meditation tacos food truck marfa portland forage gochujang. Pour-over crucifix helvetica kitsch. Fingerstache gochujang tattooed tilde. Stumptown taxidermy yr microdosing, heirloom gluten-free affogato aesthetic pinterest bicycle rights."
	}
];



//create new records based on the array destinations_list
db.Destination.create(destinations_list, function(err, destinations){
	if (err) { 
		return console.log('err', err); 
	}
	console.log("created", destinations.length, "destinations");
	process.exit();
});




// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
