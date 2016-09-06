console.log("Sanity Check: JS is working!");
var sourceProfile;
var templateProfile;
var sourceDestinations;
var templateDestinations;

$(document).ready(function(){

	sourceProfile = $('#profile-template').html();
	console.log('template profile source:' + sourceProfile);
	templateProfile = Handlebars.compile(sourceProfile);

	$.ajax({
		method: 'GET',
		url: '/api/profile',
		success: handleProfileData,
		error: handleError
	});

	sourceDestinations = $('#destinations-template').html();
	templateDestinations = Handlebars.compile(sourceDestinations);

	$.ajax({
		method: 'GET',
		url: 'api/destinations',
		success: handleDestinationsData,
		error: handleError
	})


});


function handleProfileData(profileResult) {
	console.log("returned profileResult: ", profileResult);

  	var profileHtml = templateProfile(profileResult);
  	console.log("profileHtml: "+ profileHtml);
	$('#append-profile').append(profileHtml);

}

function handleDestinationsData(destinationsResult) {
	console.log("returned destinationsResult: ", destinationsResult);

	var destinationsHtml = templateDestinations({destinations: destinationsResult});
	console.log("destinationsHtml: "+ destinationsHtml);
	$('#destinations-list').append(destinationsHtml);
}


function handleError(e) {
  console.log('uh oh');
  $('#profile').text('Failed to load profile, is the server working?');
}

