'use strict';

/**
 * @ngdoc service
 * @name nimbusPlayerApp.genius
 * @description
 * # genius
 * Service in the nimbusPlayerApp.
 */
angular.module('nimbusPlayerApp')
  .service('genius', function ($http,$sce) {
      this.endpoint = 'https://api.genius.com/';
	  this.token = '21V219dRk6NBf24CfHNAhg8zw1A9UuNwGUSmLcSvtCjOHKVRHlH2Mp9bCN6y83tp';
	  this.search = function(query){
		console.log('genius query',query);
		var data = false;
		$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
		
		var url = this.endpoint+'search?q='+encodeURIComponent(query.toLowerCase())+'&access_token='+this.token;
		
		$sce.trustAsResourceUrl(url);
		
		console.log('genius query url',url);
	   
		$http.get(url).then(function(result){
		  console.log('Search result',result);
		  data = result.data;
		}).catch(function(error){
		  console.log('Search error',error);
		  data = error;
		});
		return data;
		
	  }
  });
