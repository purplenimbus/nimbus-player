'use strict';

/**
 * @ngdoc service
 * @name nimbusPlayerApp.wave
 * @description
 * # wave
 * Service in the nimbusPlayerApp.
 */
angular.module('nimbusPlayerApp')
  .service('wave', function () {
    this.initWave = function($scope){
		
		console.log('wave init',angular.element('#player-wave').get(0));
		
		var siriWave = new SiriWave({
		  container: angular.element('#player-wave').get(0),
		  width: 640,
		  height: 200,
		  style:'default',
		  cover: true,
		speed: 0.03,
		amplitude: 0.7,
		frequency: 2
		  /*
		  speed: 0.2,
		  color: '#000',
		  frequency: 2
		  */
		});
		
		
		return siriWave;
	}
  });
