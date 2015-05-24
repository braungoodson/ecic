'use strict';

angular.module('snakeApp')
  .service('ecic', function ($resource) {
	return $resource('https://cdph.data.ca.gov/resource/emt8-tzcf.json',
		{},
		{get: {
			method: 'GET',
			isArray: true,
			responseTransform: function (data, headers) {
				return data;
			}
		}})
	;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
