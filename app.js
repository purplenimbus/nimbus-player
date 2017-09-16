var app = angular.module("musicPlayer", []);

app.controller("playerCtrl", function($scope, music,$interval,wave,artist) {
    $scope.playing = false;
    var songs = [
      {
        name: "bodak yellow",
        artist: { id: 99, name: "Cardi B" },
        image:
          "https://images.genius.com/91c42ffe08c769e12a269041ac5b9e9d.960x960x1.jpg",
        url:
          "http://s4.faz-sv.in/mr-reese/top/august2017/Hot%20100%20Billboard%20Singles%20Chart%20-%2013%20August%202017%20-%20MP3%20320/28.%20Cardi%20B%20-%20Bodak%20Yellow.mp3",
        album: {
          id: 45,
          type: "album",
          name: "cb1"
        },
        features: [
        ],
        producer:[{
          id:12,
          name:'j. white did it'
        }]
      },{
        name: "feel me",
        artist: { id: 35, name: "tyga" },
        image:      "https://images.genius.com/95d582049a3bf226ca95b7155f6b56c3.700x700x1.jpg",
        url:"http://purplinx.org/djuhqvxhwtgn/play.mp3",
        album: {
          id: 25,
          type: "album",
          name: "bitch im the shit 2"
        },
        features: [{
			id:21,
			name:'kanye west'
		}],
		producer: [{
			id:21,
			name:'kanye west'
		},{
			id:27,
			name:'sound MOB'
		}]
      },{
        name: "Skateboard P (Remix)",
        artist: { id: 29, name: "MadeinTYO" },
        image:      "https://sslf.ulximg.com/image/355x355/cover/1478305765_0a1255c31fc98be00f8d17c18abc49f6.jpg/3b750aa78a0329b926c5027a6fd55920/1478305765_909ea89daaf79bea8f8493230338a8b3.jpg",
        url:"http://70clacks.co/wp-content/uploads/2016/11/MADEINTYO-SKATEBOARD-P-REMIX-FT.-BIG-SEAN_9ZwXMWzBN34_youtube.mp3",
        album: {
          id: 15,
          type: "mixtape",
          name: "untitled"
        },
        features: [{
			id:20,
			name:'big sean'
		}],
		producer: [{
			id:60,
			name:'K Swisha'
		}]
      },{
        name: "bounce back",
        artist: { id: 20, name: "big sean" },
        image:
          "http://fuxwithit.com/wp-content/uploads/2016/10/Take-No-Ls.png",
        url:
          "http://purplinx.org/htevstv3sjsy/play.mp3",
        album: {
          id: 15,
          type: "mixtape",
          name: "take no ls"
        },
        features: [
        ],
        
      },{
        name: "RAF",
        artist: { id: 1, name: "A$AP Mob" },
        image:
          "http://images.genius.com/f3becefe1f0fd4be1d9e838af51bc59d.1000x1000x1.jpg",
        url:
          "http://gidiclick.com/download/ASAP_Rocky_-_RAF_Ft_Frank_Ocean_Lil_Uzi_Vert_Quavo_Official_Version_Gidiclick.com_.mp3.mp3",
        album: {
          id: 1,
          type: "mixtape",
          name: "the cozy tapes vol 2: too cozy"
        },
        features: [
          /*{
            id: 2,
            name: "flacko"
          },*/
          {
            id: 3,
            name: "quavo"
          },
          {
            id: 4,
            name: "lil uzi vert"
          },
          {
            id: 5,
            name: "playboi carti"
          },
          {
            id: 6,
            name: "frank ocean"
          }
        ],
        producer: [{
			id:69,
			name:'dun deal'
		}]
      },
      {
        name: "in da club",
        artist: { name: "50 Cent" },
        image:
          "http://upload.wikimedia.org/wikipedia/en/9/9d/Get_Rich_Or_Die_Tryin'.JPG",
        url:
          "http://tecmax0ne.free.fr/mp3/Starfloor%20Anthologie%20-%203cd%20-%20By%20SkunK357/Starfloor%20Anthologie%20-%20By%20SkunK/Cd3/08%20-%2050Cent%20-%20In%20Da%20Club.mp3",
        album: {
          id: 2,
          type: "album",
          name: "get rich or die trying"
        }
      }
    ];

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
    
	}
	
	$scope.playerInit();
	
  console.log($scope);
  
  $scope.getInfo = function(id,name){
    $scope.offCanvas.show();
    
    var info = artist.getInfo(id,name,$scope);
    
    $scope.info = {};
    
    $scope.info.title = name;
    
    if(info.status === 200){
      $scope.info.description = info.data;
    } else{
      $scope.info.description = 'no information found';
    }
  }
  /*
	$scope.$watch('player.currentTime', function(newValue, oldValue) {
	  console.log('New:',newValue,'old:',oldValue);
	  
	});*/
  
  })
  .service("music", function(waveForm) {
    this.songArray = [];

    this.howl = [];

    this.initHowl = function(songs,$scope) {
		console.log("initHowl!", songs);
	  
		songs.map(function(value){
			var howl = new Howl({
								src: value.url,
								//autoplay: true,
								//loop: true,
								//volume: 0.5,
                html5 : true,
								onseek: function(e) {
								  console.log("seeked!",e);
								},
								onend: function() {
						   console.log("Finished!");
								  $scope.nextSong();
                  $scope.playing = false;
								  $scope.$apply();
                  
								},
								onplay: function() {
									console.log("Playing!");
									$scope.playing = true;
                  $scope.$apply();
								},
                onload : function(){
                  console.log("Song Loaded!");
                },
        onloaderror : function(id,e){
                  console.log("Song Load Error!",id,e);
        },
                    onplayerror : function(){
                      console.log("Song Play Error!",id,e);
                      
                }
							});
							
			//this.howl.push(howl);
			
			value.howler = howl;
      
      waveForm.waveForm().load(value.url);
      
      value.waveForm = waveForm.waveForm();
			
		});
		
		return songs;
    };
  })
.service("wave", function() {
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
  
})
.service("waveForm", function() {
  this.waveForm = function(){
    var waveform = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    
    return waveform;
  }
})
.service("artist", function($http,genius) {
  this.getInfo = function(id,name,$scope){
    console.log('getInfo',id,name)
    ;

     var info = false;
    
    var data = genius.search(name);
    
    console.log('getInfo search',data)
    ;
    
    return info;
  };
    
})
.service("genius", function($http) {
  this.endpoint = 'https://api.genius.com/';
  this.token = '3Ja4qwXuL5AmLmVS1j-WIrHidw-R1tk67ceeWKMFTRL2WNPQQ91x0aYClcWJgjOk';
  this.search = function(query){
    console.log('genius query',query);
    var data = false;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
    
    var url = this.endpoint+'search?q='+encodeURIComponent(query.toLowerCase());
    
   console.log('genius query url',url);
    angular.element.ajax({ 
      
      url:url,
      dataType:'jsonp',
      beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization','Bearer ' + this.token); 
                                          }
         })
      .done(function(result){
      console.log('Search result',result);
      data = result.data;
    }).fail(function(error){
      console.log('Search error',error);
      data = error;
    });
    return data;
    
  }
})
.service("UI", function() {
  this.offCanvas = function(body){

  }
})
.factory("uikit", function() {
  this.offCanvas = function(body){
    var str = '';
    str += '<div id="off-canvas" uk-offcanvas="overlay: true">';
    str += '<div class="uk-offcanvas-bar">';

   str +=    '<button class="uk-offcanvas-close" type="button" uk-close></button>';
      
    str +=   body;

    str += '</div>';
  str += '</div>';
    return str;
  }
});


