'use strict';

/**
 * @ngdoc function
 * @name nimbusPlayerApp.controller:PlayerctrlCtrl
 * @description
 * # PlayerctrlCtrl
 * Controller of the nimbusPlayerApp
 */
angular.module('nimbusPlayerApp')
  .controller('PlayerCtrl', function ($scope,wave,music,waveForm,genius) {
    $scope.playing = false;
    var songs = music.songs();

    $scope.player = {
      currentSong: 0,
	  currentTime: 0,
      playlist: $scope.songs
    };

    $scope.prevSong = function() {
		
      $scope.player.wave.stop();
      console.log('Playing?',$scope.playing);
		//stop current song
		$scope.playing ? $scope.stopSong() : null;
		//move pointer
		$scope.player.currentSong -= 1;
		//play song
		$scope.playSong($scope.player.currentSong);
    };
  
    $scope.nextSong = function() {
		
      $scope.player.wave.stop();
      console.log('Playing?',$scope.playing);
		//stop current song
		$scope.playing ? $scope.stopSong() : null;
		//move pointer
		$scope.player.currentSong += 1;
		//play song
		$scope.playSong($scope.player.currentSong);
    };

    $scope.playSong = function(index) {
	
		console.log("index",index);
      
		//stop current song
		if($scope.playing){
			if(index === $scope.player.currentSong){
				console.log('same song playing paused!');
				$scope.pauseSong();
			}else{
				console.log('diffrent song playing stopped!')
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
      console.log("pauseSong");
      //$scope.pauseTimer();
      $scope.playing = false;
      $scope.player.songs[$scope.player.currentSong].howler.stop();
	  $scope.player.currentTime = 0;
      
      $scope.player.wave.stop();
    };
  
	$scope.pauseSong = function() {
      console.log("pauseSong");
      //$scope.pauseTimer();
      $scope.playing = false;
      $scope.player.songs[$scope.player.currentSong].howler.pause();
    
    $scope.player.wave.stop();
    
    };
  /*
  $scope.updateTimer = function(){
     console.log('updating timer',$scope.player.currentTime);
      $scope.player.currentTime++;
  };
  
  var timer = false;
  
  $scope.startTimer  = function(maxTime){
    console.log('startTimer');
   timer = $interval($scope.updateTimer,maxTime);
  }
  
  $scope.pauseTimer = function(){
    console.log('timerPaused');
    $interval.cancel(timer);
  }
  
  $scope.resetTimer = function(){
    console.log('timerReset');
    $interval.cancel(timer);
    $scope.player.currentTime = 0;
  }
  */

	$scope.playerInit = function(){
		//init howler;
		$scope.player.songs = music.initHowl(songs,$scope);
    
		$scope.player.wave = wave.initWave($scope);
	
		//$scope.player.currentSong = 0;
		//console.log($scope.player.songs[0]);
    
    $scope.offCanvas = UIkit.offcanvas('#off-canvas');
		
	angular.element('#off-canvas').on('hidden',function(e){
		$scope.resetOffCanvas();
	});
    
	}
	
	$scope.resetOffCanvas = function(){
		
		$scope.playlist = false;
		$scope.offCanvas.description = false;
		$scope.offCanvas.title = false;
		
		console.log('offcanvas reset');
	}
	
	$scope.playerInit();
	
  console.log($scope);
  
  $scope.getInfo = function(id,name){
    $scope.offCanvas.show();
    
    var info = artist.getInfo(id,name,$scope);
        
    $scope.offCanvas.title = name;
    
    if(info.status === 200){
      $scope.offCanvas.description = info.data;
    } else{
      $scope.offCanvas.description = 'no information found';
    }
  }
  
  $scope.showPlaylist = function(){
	
	console.log('show playlist');
	
    $scope.offCanvas.show();
    
    $scope.offCanvas.title = name;
    
    $scope.playlist = true;
	
  }
  /*
	$scope.$watch('player.currentTime', function(newValue, oldValue) {
	  console.log('New:',newValue,'old:',oldValue);
	  
	});*/
  });
