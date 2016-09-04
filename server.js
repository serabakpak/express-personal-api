// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// cors = cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/
var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/profile', function(req, res) {
  db.Profile.findOne(function(err, profile) {
    if (err) {
      return console.log('index error' + err);
    }
    res.json(profile);

  });
});

//get all destinations
app.get('/api/destinations', function (req, res) {
  db.Destination.find(function(err, destinations) {
    if (err) {
      return console.log('index error: ' + err);
    }
    res.json(destinations);
  });
});

//get one destination
app.get('/api/destinations/:id', function(req, res) {
  db.Destination.findOne({_id: req.params.id}, function(err, destination) {
    res.json(destination);
  });
});

//create a new destination
app.post('/api/destinations', function(req, res) {
  var newDestination = new db.Destination (req.body);
  newDestination.save(function handleSavedDestination(err, savedDestination) {
    res.json(savedDestination);
  });
});

//update a destination



//delete a destination
app.delete('/api/destinations/:id', function(req, res) {
  console.log('destinations delete: ', req.params);
  db.Destination.findOneAndRemove({_id: req.params.id}, function(err,deletedDestination) {
    res.json(deletedDestination);
  });
})



/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  //this is stringifying
  var documents = require('./views/docs')
  res.json(documents);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
