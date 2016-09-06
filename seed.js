// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var seraBak = {
	name: "Sera Bak",
	githubLink: "https://github.com/serabakpak",
	githubProfileImage: "https://avatars2.githubusercontent.com/u/17302356?v=3&s=460",
	personalSiteLink: "https://serabakpak.github.io/",
	currentCity: "San Francisco"
}

var destinations_list = [
	{
	image: "https://lonelyplanetimages.imgix.net/mastheads/16641625.jpg?sharp=10&vib=20&w=1200",
	name: "Machu Picchu",
	country: "Peru",
	description: "3 wolf moon kickstarter intelligentsia tousled viral bitters. Pitchfork DIY banh mi pinterest vegan chia. YOLO artisan vegan forage biodiesel."
	},
	{
	image: "http://whc.unesco.org/uploads/thumbs/site_0668_0067-750-0-20151104115852.jpg",
	name: "Angkor Wat",
	country: "Cambodia",
	description: "3 wolf moon kickstarter intelligentsia tousled viral bitters. Pitchfork DIY banh mi pinterest vegan chia. YOLO artisan vegan forage biodiesel."
	},
	{
	image: "https://www.pandaw.com/images/destinations/Halong-Bay.jpg",
	name: "Halong-Bay",
	country: "Vietnam",
	description: "3 wolf moon kickstarter intelligentsia tousled viral bitters. Pitchfork DIY banh mi pinterest vegan chia. YOLO artisan vegan forage biodiesel."
	},
	{
	image: "http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2011/10/hotel-kakslauttanen-igloo-village-lead.jpg",
	name: "Kakslauttanen Artic Resort",
	country: "Finland",
	description: "3 wolf moon kickstarter intelligentsia tousled viral bitters. Pitchfork DIY banh mi pinterest vegan chia. YOLO artisan vegan forage biodiesel."
	}
];
db.Profile.remove({}, function(err, profile) {
	if (err) {
		console.log('Error occurred in remove', err)
	}
	else {
		console.log('removed profile');
	}
	db.Profile.create(seraBak, function(err, profile){
		if (err) {
			return console.log('err', err);
		}
		console.log('created profile: ' + profile);
	});
});

db.Destination.remove({}, function(err, profile) {
	if (err) {
		console.log('Error occurred in remove', err)
	}
	else {
		console.log('removed all destinations');
	}
	//create new records based on the array destinations_list
	db.Destination.create(destinations_list, function(err, destinations){
		if (err) { 
			return console.log('err', err); 
		}
		console.log("created", destinations.length, "destinations");
		process.exit();
	});
});











// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
