'use strict';

/**
 * @ngdoc function
 * @name nimbusPlayerApp.controller:PlayerctrlCtrl
 * @description
 * # PlayerctrlCtrl
 * Controller of the nimbusPlayerApp
 */
angular.module('nimbusPlayerApp')
  .controller('PlayerCtrl', function ($scope,wave,music,waveForm,genius,artist) {
	
	$scope.player = {
	  currentSong: 0,
	  currentTime: 0,
	  playlist: music.songs
	};
	
	
    $scope.prevSong = function() {
		
      $scope.player.wave.stop();
      console.log('Playing?',$scope.playing);
		//stop current song
		if($scope.playing){ $scope.stopSong(); }
		//move pointer
		$scope.player.currentSong -= 1;
		//play song
		$scope.playSong($scope.player.currentSong);
    };
  
    $scope.nextSong = function() {
		
      $scope.player.wave.stop();
      console.log('Playing?',$scope.playing);
		//stop current song
		if($scope.playing){ $scope.stopSong(); }
		//move pointer
		$scope.player.currentSong += 1;
		//play song
		$scope.playSong($scope.player.currentSong);
    };

    $scope.playSong = function(index) {
		
		if(!index || index == 'undefined'){
			index = 0;
		}
		
		console.log('index',index);
      
		//stop current song
		if($scope.playing){
			if(index === $scope.player.currentSong){
				console.log('same song playing paused!');
				$scope.pauseSong();
			}else{
				console.log('diffrent song playing stopped!');
				$scope.stopSong();
				//play new index
				$scope.player.songs[index].howler.play();
				//set currentSong to new index
				$scope.player.currentSong = index;
				
				$scope.playing = true;
        
        $scope.player.wave.start();
       // $scope.startTimer($scope.player.songs[index].howler.duration());
			}
		}else{
			//play new index
			$scope.player.songs[index].howler.play();
			//set currentSong to new index
			$scope.player.currentSong = index;
			
			$scope.player.wave.start();
      
  //$scope.startTimer($scope.player.songs[index].howler.duration());
		}
      
    };
    $scope.stopSong = function() {
      console.log('pauseSong');
      $scope.playing = false;
      $scope.player.songs[$scope.player.currentSong].howler.stop();
	  $scope.player.currentTime = 0;
      
      $scope.player.wave.stop();
    };
  
	$scope.pauseSong = function() {
      console.log('pauseSong');
      $scope.playing = false;
      $scope.player.songs[$scope.player.currentSong].howler.pause();
    
    $scope.player.wave.stop();
    
    };

	$scope.playerInit = function(){
		//init howler;
		
		$scope.playing = false;
	
		$scope.player = {
		  /*currentSong: 0,
		  currentTime: 0,
		  playlist: music.songs()*/
		};
	
		$scope.player.songs = music.initHowl(music.songs,$scope);
    
		$scope.player.wave = wave.initWave($scope);
	
		$scope.player.currentSong = 0;
    
		$scope.offCanvas = UIkit.offcanvas('#off-canvas');
			
		angular.element('#off-canvas').on('hidden',function(){
			$scope.resetOffCanvas();
		});

		console.log('Songs',$scope);

    
	};
	
	$scope.resetOffCanvas = function(){
		
		$scope.playlist = false;
		$scope.offCanvas.description = false;
		$scope.offCanvas.title = false;
		
		console.log('offcanvas reset');
	};
	
	  
	  $scope.getInfo = function(id,name){
		$scope.offCanvas.show();
		
		var info = artist.getInfo(id,name,$scope);
			
		$scope.offCanvas.title = name;
		
		if(info.status === 200){
		  $scope.offCanvas.description = info.data;
		} else{
		  $scope.offCanvas.description = 'no information found';
		}
	  };
	  
	  $scope.showPlaylist = function(){
		
		console.log('show playlist',$scope);
		
		$scope.offCanvas.show();
		
		$scope.offCanvas.title = name;
		
		$scope.playlist = true;
		
	  };

		$scope.playerInit();
  });
