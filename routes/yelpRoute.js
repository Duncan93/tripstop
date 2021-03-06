var yelp = require('../models/yelp.js');

exports.findRestaurants = function(request, response) {
	var set_parameters = {
		ll: request.params.ll,
		term: 'restaurants', // default for now, but could be changed in future to param (if this becomes multi-purpose)
		radius_filter: request.params.radius_filter // needs to be converted to meters
	}
	yelp.request_yelp(set_parameters, function(err, res, body) { 
		response.end(body);
	});
}