'use strict';

/**
 * @ngdoc service
 * @name nimbusPlayerApp.waveForm
 * @description
 * # waveForm
 * Service in the nimbusPlayerApp.
 */
angular.module('nimbusPlayerApp')
  .service('waveForm', function () {
    this.waveForm = function(){
		var waveform = WaveSurfer.create({
			container: '#waveform',
			waveColor: 'violet',
			progressColor: 'purple'
		});
		
		return waveform;
	  }
  });
