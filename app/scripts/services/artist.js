'use strict';

/**
 * @ngdoc service
 * @name nimbusPlayerApp.artist
 * @description
 * # artist
 * Service in the nimbusPlayerApp.
 */
angular.module('nimbusPlayerApp')
  .service('artist', function ($http,genius) {
      this.getInfo = function(id,name,$scope){
		console.log('getInfo',id,name)
		;

		 var info = false;
		
		var data = genius.search(name);
		
		console.log('getInfo search',data)
		;
		
		return info;
	  };
  });
