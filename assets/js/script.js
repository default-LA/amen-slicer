var s = 0;
var t = 0;
var playing = false;
var bpm = 180;    
var SecBpm = 180;    
var div = 17;             
var tickTimeout = null;
var modTimeout = null;
var markTimeout = null;
var multiplier = 60;
var base = 60;
var aDown = false;
var sDown = false;
var dDown = false;
var fDown = false;
var jDown = false;
var kDown = false;
var lDown = false;
var oDown = false;
var pDown = false;
var soundPlaying = "";
var metronome = true;
var playbackRate = 1;
var constMarker = document.getElementById("const-marker"); 
var modMarker = document.getElementById("mod-marker"); 

var constPos = 0;




var metroTick = new Howl({src: ["assets/sound/metro.ogg"]});

var waveSq = document.getElementsByClassName("wave");
var aKey = document.querySelector(".a");
var sKey = document.querySelector(".s");
var dKey = document.querySelector(".d");
var fKey = document.querySelector(".f");
var gKey = document.querySelector(".g");
var hKey = document.querySelector(".h");
var jKey = document.querySelector(".j");
var kKey = document.querySelector(".k");
var lKey = document.querySelector(".l");

var l = 0;

var soundArr = [];

var soundState = [true, false, true, false, true, false, true, true, true, true, true, true, true, false, true, true]


for (var i = 0; i <= 11; i++){
  soundArr[i] = new Howl({src: ["assets/sound/amen/amen_" + i + ".ogg"]});
}

function constLoop(){
	if (aDown === false && sDown === false && dDown === false && fDown === false && lDown === false){
		soundArr[t]._rate = playbackRate;
		soundPlaying._rate = playbackRate;
		normPlay = true
		secBpm = bpm;
		if (metronome === true){
			if (s == 0 || s == 4 || s == 8 || s == 12) {
				metroTick.play();
			}
		}
		if(soundState[s] === true){
			playing = true;
			soundArr[t].play();
			soundPlaying = soundArr[t];
			t++;
			if (t >= 12){
				t = 0;
			}
			s = ++s % div;	
			tickTimeout = setTimeout(constLoop, 15000 / bpm); 
		} else {
			s = ++s % div;
			tickTimeout = setTimeout(constLoop, 15000 / bpm); 			
		}
		
	} else {
		if(soundState[s] === true){
			t++;
			if (t >= 12){
				t = 0;
			}
			s = ++s % div;	
			tickTimeout = setTimeout(constLoop, 15000 / bpm); 

		} else {
			s = ++s % div;
			tickTimeout = setTimeout(constLoop, 15000 / bpm); 
		}
	}
	if (s >= 16){
		reset();
	}


	
}

function markLoop(){
	if (constPos <= 1200){
		constMarker.style.left = constPos + 'px';
		constPos += 3;
	} else {
		constPos = 0;		
	}
	
	markTimeout = setTimeout(markLoop, 15000 / 60 / bpm); 

}

function modLoop(){
	if (normPlay != true){
		soundPlaying.stop();
		soundPlaying.play();		
	}
	modTimeout = setTimeout(modLoop, 15000 / secBpm); 

}

function start(){
	constPos = 0;		

	markLoop();
	constLoop();
	modLoop();
}

function stop(){
	playing = false;
	clearTimeout(tickTimeout);
	clearTimeout(modTimeout);
}

function reset(){
	clearTimeout(tickTimeout);
	clearTimeout(modTimeout);
	clearTimeout(markTimeout);
	start();
}

document.addEventListener('keydown', function(event) {
	normPlay = false;
	if (event.code == 'KeyA') {
	  	if(aDown) return;
		aKey.style.backgroundColor = "blue";
	  	if (s % 2 === 0) {
	  		console.log("mod");
		    secBpm = secBpm * 0.5;	  	
		    aDown = true;
		}
	} 
	if (event.code == 'KeyS') {
  		if(sDown) return;
    	sDown = true;
    	sKey.style.backgroundColor = "blue";
  	} 
  	if (event.code == 'KeyD') {
  		if(dDown) return;
	    secBpm = secBpm * 2;	 	    
    	dDown = true;
    	dKey.style.backgroundColor = "blue";
  	} 
  	if (event.code == 'KeyF') {
  		if(fDown) return;
	    secBpm = secBpm * 4;	 	    
    	fDown = true;
    	fKey.style.backgroundColor = "blue";
  	} 
  	if (event.code == 'KeyJ') {
  		jDown = true;
  		if(soundPlaying._rate < 0.4) {
  			return;
  		} else {
	  		soundPlaying._rate -= 0.05;
	    }
    	jKey.style.backgroundColor = "blue";
  	} 
  	
  	if (event.code == 'KeyK') {
  		soundPlaying._rate += 0.1;
    	kDown = true;
    	kKey.style.backgroundColor = "blue";
  	} 
  	if (event.code == 'KeyL') {
	    soundPlaying._rate -= 0.01;  		
  		lDown = true;
  		if(kDown) return;  		
	    secBpm = secBpm * 2;   
    	lKey.style.backgroundColor = "blue";
  	} 
	if (event.code == 'KeyO') {
		oDown = true;  		
  		if(playbackRate < 0.4) {
  			return;
  		} else {
	  		playbackRate -= 0.05;
	  		console.log(playbackRate);
	    }
  	}


  	if (event.code == 'KeyP') {
		pDown = true;
  		if(playbackRate > 3) {
  			return;
  		} else {
	  		playbackRate += 0.05;
	  		console.log(playbackRate);

	    }	   
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
	if (event.code == 'KeyF') {
    	fDown = false;
    	fKey.style.backgroundColor = "black";

	} 


	if (event.code == 'KeyJ') {
    	jDown = false;

    	jKey.style.backgroundColor = "black";

	} 

	if (event.code == 'KeyK') {
    	kDown = false;

    	kKey.style.backgroundColor = "black";

	} 
	if (event.code == 'KeyL') {
    	lDown = false;
    	l = 0;

    	lKey.style.backgroundColor = "black";

	} 
	if (event.code == 'KeyO') {
    	oDown = false;
	} 
	if (event.code == 'KeyP') {
    	pDown = false;
	} 
});