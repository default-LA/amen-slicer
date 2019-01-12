var s = 0;
var t = 0;
var playing = false;
var bpm = 160;    
var SecBpm = 160;    
var div = 16;             
var tickTimeout = null;
var multiplier = 60;
var base = 60;
var aDown = false;
var sDown = false;
var dDown = false;
var jDown = false;
var kDown = false;
var lDown = false;
soundPlaying = "";

var waveSq = document.getElementsByClassName("wave");
var aKey = document.querySelector(".a");
var sKey = document.querySelector(".s");
var dKey = document.querySelector(".d");

var soundArr = [];

var soundState = [true, false, true, false, true, false, true, true, true, true, true, true, true, false, true, true]


for (var i = 0; i <= 11; i++){
  soundArr[i] = new Howl({src: ["assets/sound/amen/amen_" + i + ".ogg"]});
}

function constLoop(){
	if (aDown === false && sDown === false && dDown === false){
		normPlay = true
		secBpm = bpm;
		if(soundState[s] === true){
			playing = true;
			soundArr[t].play();
			soundPlaying = soundArr[t];
			t++;
			if (t >= 12){
				t = 0;
			}
			s = ++s % div;	
			tickTimeout = setTimeout(constLoop, 250 * multiplier / bpm); 

		} else {
			s = ++s % div;
			tickTimeout = setTimeout(constLoop, 250 * multiplier / bpm); 
			
		}
	} else {
		if(soundState[s] === true){
			t++;
			if (t >= 12){
				t = 0;
			}
			s = ++s % div;	
			tickTimeout = setTimeout(constLoop, 250 * multiplier / bpm); 

		} else {
			s = ++s % div;
			tickTimeout = setTimeout(constLoop, 250 * multiplier / bpm); 
		}
	}
}

function modLoop(){
	if (normPlay != true){
		soundPlaying.stop();
		soundPlaying.play();		
	}
	tickTimeout = setTimeout(modLoop, 250 * multiplier / secBpm); 

}

function start(){
	constLoop();
	modLoop();
}

function stop(){
	playing = false;
	clearTimeout(tickTimeout);
}

document.addEventListener('keydown', function(event) {
	normPlay = false;
	if (event.code == 'KeyA') {
	  	if(aDown) return;
	    secBpm = secBpm * 0.5;	  	
	    aDown = true;
	    aKey.style.backgroundColor = "blue";
	} 
	if (event.code == 'KeyS') {
  		if(sDown) return;
    	sDown = true;
    	sKey.style.backgroundColor = "blue";
  	} 
  	if (event.code == 'KeyD') {
  		if(dDown) return;

	    
    	dDown = true;
    	dKey.style.backgroundColor = "blue";
  	} 
});

document.addEventListener('keyup', function(event) {
	if (event.code == 'KeyA') {
		aDown = false;
    	aKey.style.backgroundColor = "black";
  	} 
  	if (event.code == 'KeyS') {
    	sDown = false;
    	sKey.style.backgroundColor = "black";
	} 
	if (event.code == 'KeyD') {
    	dDown = false;
    	dKey.style.backgroundColor = "black";

	} 
});