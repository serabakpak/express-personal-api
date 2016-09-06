console.log("Sanity Check: JS is working!");
var sourceProfile;
var templateProfile;
var sourceDestinations;
var templateDestinations;
var allDestinations = [];
var $destinationsList;

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

	$destinationsList = $('#destinations-list');
	sourceDestinations = $('#destinations-template').html();
	templateDestinations = Handlebars.compile(sourceDestinations);

	$.ajax({
		method: 'GET',
		url: '/api/destinations',
		success: handleDestinationsData,
		error: handleError
	})

	$('#destinations-form').on('submit', function(e) {
	    e.preventDefault();
	    $.ajax({
	      method: 'POST',
	      url: '/api/destinations',
	      data: $(this).serialize(),
	      success: newDestSuccess,
	      error: handleError
	    });
  	});

  	$destinationsList.on('click', '.deleteBtn', function() {
	    console.log('clicked delete button to', '/api/destinations/'+$(this).attr('data-id'));
	    $.ajax({
	      method: 'DELETE',
	      url: '/api/destinations/'+$(this).attr('data-id'),
	      success: deleteDestSuccess,
	      error: handleError
	    });
	});

  	$destinationsList.on('click', '.updateBtn', function() {
  		$(this).parent().find('.hidden').removeClass('hidden');	
  	})

  	$destinationsList.on('click', '.cancelBtn', function() {
  		$(this).parent().find('.edit').addClass('hidden');
  	})

  	$destinationsList.on('click', '.saveBtn', function() {
  		var updatedDest = $(this).parent().find('input.edit').val();
  		$.ajax({
  			method: 'PUT',
  			url: '/api/destinations/' + $(this).attr('data-id'),
  			data: {description: updatedDest},
  			success: updateDestSuccess,
  			error: handleError
  		})
  	})
});

function render () {
  	$destinationsList.empty();
  	var destinationsHtml = templateDestinations({destinations: allDestinations});
	$destinationsList.append(destinationsHtml);
};


function handleProfileData(profileResult) {
	console.log("returned profileResult: ", profileResult);
  	var profileHtml = templateProfile(profileResult);
  	console.log("profileHtml: "+ profileHtml);
	$('#append-profile').append(profileHtml);
}

function handleDestinationsData(json) {
	console.log("returned destinationsResult: ", json);
	allDestinations = json;	
	render();
	
}

function newDestSuccess(json) {
  	$('.clear').val('');
  	allDestinations.push(json);
  	render();
}

function deleteDestSuccess(json) {
  var destination = json;
  console.log('json', json);
  var destinationId = destination._id;
  console.log('delete destination', destinationId);
  
  for(var i = 0; i < allDestinations.length; i++) {
    if(allDestinations[i]._id === destinationId) {
      allDestinations.splice(i, 1);
      break;  
    }
  }
  render();
}

function updateDestSuccess(json) {
	var destination = json;
	console.log('json', json);
	var destinationId = destination._id;
	console.log('update destination', destinationId);

	for (var i = 0; i < allDestinations.length; i++) {
		if(allDestinations[i]._id === destinationId) {
			allDestinations[i].description = json.description;
			break;		
		}
	}
	render();

}

function handleError(e) {
  console.log('uh oh');
}

