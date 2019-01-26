var s = 0;
var t = 0;
var playing = false;
var bpm = 180;    
var SecBpm = 160;    
var div = 17;             
var tickTimeout = null;
var modTimeout = null;
var markTimeout = null;
var multiplier = 60;
var base = 60;
var tLength = 0;
var constPos = 0;
var metroTick = new Howl({src: ["assets/sound/metro.ogg"]});
var aDown = false;
var sDown = false;
var dDown = false;
var fDown = false;
var gDown = false;
var jDown = false;
var kDown = false;
var lDown = false;
var oDown = false;
var pDown = false;
var qDown = false;
var wDown = false;
var zDown = false;
var xDown = false;
var cDown = false;
var vDown = false;
var soundPlaying = "";
var metronome = false;
var playbackRate = 1;
var l = 0;
var soundSelected = "break1";
var loadedSound = "break1";
var soundArr = [];
var soundState = [];

var constMarker = document.getElementById("const-marker"); 
var modMarker = document.getElementById("mod-marker"); 
var butIn = document.getElementById("inner"); 
var butOut = document.getElementById("control"); 
var metLed = document.getElementById("metro-led"); 
var playBtn = document.getElementById("play"); 
var stopBtn = document.getElementById("stop");

var waveSq = document.getElementsByClassName("wave");
var aKey = document.querySelector(".control.a");
var sKey = document.querySelector(".control.s");
var dKey = document.querySelector(".control.d");
var fKey = document.querySelector(".control.f");
var gKey = document.querySelector(".control.g");
var hKey = document.querySelector(".control.h");
var jKey = document.querySelector(".control.j");
var kKey = document.querySelector(".control.k");
var lKey = document.querySelector(".control.l");
var qKey = document.querySelector(".control.q");
var wKey = document.querySelector(".control.w");
var oKey = document.querySelector(".control.o");
var pKey = document.querySelector(".control.p");
var zKey = document.querySelector(".control.z");
var xKey = document.querySelector(".control.x");
var cKey = document.querySelector(".control.c");
var vKey = document.querySelector(".control.v");
var playBtn = document.querySelector(".control.seek-btns.play");
var stopBtn = document.querySelector(".control.seek-btns.stop");
var aIn = document.querySelector(".inner.a");
var sIn = document.querySelector(".inner.s");
var dIn = document.querySelector(".inner.d");
var fIn = document.querySelector(".inner.f");
var gIn = document.querySelector(".inner.g");
var hIn = document.querySelector(".inner.h");
var jIn = document.querySelector(".inner.j");
var kIn = document.querySelector(".inner.k");
var lIn = document.querySelector(".inner.l");
var qIn = document.querySelector(".inner.q");
var wIn = document.querySelector(".inner.w");
var oIn = document.querySelector(".inner.o");
var pIn = document.querySelector(".inner.p");
var zIn = document.querySelector(".inner.z");
var xIn = document.querySelector(".inner.x");
var cIn = document.querySelector(".inner.c");
var vIn = document.querySelector(".inner.v");
var playIn = document.querySelector(".inner.seek-inner.play");
var stopIn = document.querySelector(".inner.seek-inner.stop");
var metroSw = document.querySelector(".metro-switch");
var waveBg = document.querySelector(".wave");

function loadSound(){
	if(soundSelected === "break1"){
		loadedSound = "break1";
		soundState = [true, false, true, false, true, false, true, true, true, true, true, true, true, false, true, true];
		soundArr = [];
		for (var i = 0; i <= 11; i++){
  			soundArr[i] = new Howl({src: ["assets/sound/amen/amen_" + i + ".ogg"]});
  		}
  		tLength = 12;
  		waveBg.style.backgroundImage = "url('./assets/img/waveform_1i.png')"; 
	}

	if(soundSelected === "break2"){
		loadedSound = "break2";
		soundState = [true, false, true, false, true, false, true, true, true, false, true, false, true, true, true, false];
		soundArr = [];
		for (var i = 0; i <= 10; i++){
  			soundArr[i] = new Howl({src: ["assets/sound/break2/break2_" + i + ".ogg"]});
  		}
  		tLength = 10;
  		waveBg.style.backgroundImage = "url('./assets/img/waveform_2i.png')"; 
	}

	if(soundSelected === "break3"){
		loadedSound = "break3";
		soundState = [true, false, true, false, true, true, true, true, true, true, true, false, true, true, true, true];
		soundArr = [];
		for (var i = 0; i <= 12; i++){
  			soundArr[i] = new Howl({src: ["assets/sound/break3/break3_" + i + ".ogg"]});
  		}
  		tLength = 13;
  		waveBg.style.backgroundImage = "url('./assets/img/waveform_3i.png')"; 
	}

	if(soundSelected === "break4"){
		loadedSound = "break4";
		soundState = [true, false, true, false, true, false, true, true, true, true, true, false, true, false, true, false];
		soundArr = [];
		for (var i = 0; i <= 9; i++){
  			soundArr[i] = new Howl({src: ["assets/sound/break4/break4_" + i + ".ogg"]});
  		}
  		tLength = 10;
  		waveBg.style.backgroundImage = "url('./assets/img/waveform_4i.png')"; 
	}
};
loadSound();

function constLoop(){
	if (aDown === false && sDown === false && dDown === false && fDown === false && gDown === false && lDown === false){
		soundArr[t]._rate = playbackRate;
		soundPlaying._rate = playbackRate;
		normPlay = true
		secBpm = bpm;
		if (metronome === true){
			if (s == 0 || s == 4 || s == 8 || s == 12) {
				metroTick.play();
				metLed.classList.add("met-lit");
				setTimeout(function () { 
					metLed.classList.remove("met-lit");			    	
				}, 100);
			}
		}
		
		if(soundState[s] === true){
			playing = true;
			soundArr[t].play();
			soundPlaying = soundArr[t];
			t++;
			if (t >= tLength){
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
			if (t >= tLength){
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
	if (constPos <= 900){
		constMarker.style.left = constPos + 'px';
		constPos += 7;
	} else {
		constPos = 0;		
	}
	
	markTimeout = setTimeout(markLoop, 15000 /  bpm / 8) ; 
}

function modLoop(){
	if (normPlay != true){
		soundPlaying.stop();
		soundPlaying.play();		
	}
	modTimeout = setTimeout(modLoop, 15000 / secBpm); 
}

function start(){
	if (playing === true){
		return;
	}
	playing = true;
	constPos = 0;		

	markLoop();
	constLoop();
	modLoop();
}

function stop(){
	playing = false;
	clearTimeout(tickTimeout);
	clearTimeout(modTimeout);
	clearTimeout(markTimeout);
	s = 0;
	t = 0;
}

function reset(){
	clearTimeout(tickTimeout);
	clearTimeout(modTimeout);
	clearTimeout(markTimeout);

	if (loadedSound != soundSelected){
		loadSound();
	}
	playing = false;
	start();
}

document.addEventListener('keydown', function(event) {
	normPlay = false;
	if (event.code == 'KeyA') {
	  	if(aDown) return;
		aKey.classList.add("control-down");	
		aIn.classList.add("inner-down");	
	  	if (s % 2 === 0) {
		    secBpm = secBpm * 0.5;	  	
		    aDown = true;
		}
	} 

	if (event.code == 'KeyS') {
  		if(sDown) return;
  		sKey.classList.add("control-down");	
		sIn.classList.add("inner-down");
    	sDown = true;
  	} 

  	if (event.code == 'KeyD') {
  		if(dDown) return;
  		dKey.classList.add("control-down");	
		dIn.classList.add("inner-down");
	    secBpm = secBpm * 2;	 	    
    	dDown = true;
  	} 

  	if (event.code == 'KeyF') {
  		if(fDown) return;
  		fKey.classList.add("control-down");	
		fIn.classList.add("inner-down");
	    secBpm = secBpm * 4;	 	    
    	fDown = true;
  	} 

  	if (event.code == 'KeyG') {
  		if(fDown) return;
  		gKey.classList.add("control-down");	
		gIn.classList.add("inner-down");
	    secBpm = secBpm * 0.33333;	 	    
    	fDown = true;
  	} 

  	if (event.code == 'KeyJ') {
  		if(soundPlaying._rate < 0.4) {
  			return;
  		} else {
	  		soundPlaying._rate -= 0.05;
	    }
	    if(jDown) return;
	    jKey.classList.add("control-down");	
		jIn.classList.add("inner-down");
		jDown = true;
  	} 
  	
  	if (event.code == 'KeyK') {
  		soundPlaying._rate += 0.1;
    	if(kDown) return;
    	kKey.classList.add("control-down");	
		kIn.classList.add("inner-down");
    	kDown = true;
  	} 

  	if (event.code == 'KeyL') {
	    soundPlaying._rate -= 0.01;  		
  		if(kDown) return;  		
	    secBpm = secBpm * 2;   
	    lKey.classList.add("control-down");	
		lIn.classList.add("inner-down");
  		lDown = true;
  	} 

	if (event.code == 'KeyO') {
  		if(playbackRate < 0.4) {
  			return;
  		} else {
	  		playbackRate -= 0.05;
	    }
	    if(oDown) return;
	    oKey.classList.add("control-down");	
		oIn.classList.add("inner-down");
		oDown = true;  		
  	}

  	if (event.code == 'KeyP') {
  		if(playbackRate > 3) {
  			return;
  		} else {
	  		playbackRate += 0.05;
	    }	   
	    if(pDown) return;
	    pKey.classList.add("control-down");	
		pIn.classList.add("inner-down");
		pDown = true;
  	}

  	if (event.code == 'KeyQ') {
  		if(bpm <= 60) {
  			return;
  		} else {
	  		bpm--;
	    }	   
	    if(qDown) return;
	    qKey.classList.add("control-down");	
		qIn.classList.add("inner-down");
		qDown = true;
  	} 

  	if (event.code == 'KeyW') {
  		if(playbackRate >= 250) {
  			return;
  		} else {
	  		bpm++;
	  		//code for marker speed too
	    }	   
	    if(wDown) return;
	    wKey.classList.add("control-down");	
		wIn.classList.add("inner-down");
		wDown = true;
  	} 

  	if (event.code == 'KeyZ') {
	    if(zDown) return;
	    zKey.classList.add("control-down");	
		zIn.classList.add("inner-down");
		zDown = true;
		soundSelected = "break1";

  	} 

  	if (event.code == 'KeyX') {
	    if(xDown) return;
	    xKey.classList.add("control-down");	
		xIn.classList.add("inner-down");
		xDown = true;
		soundSelected = "break2";
  	} 

  	if (event.code == 'KeyC') {
	    if(cDown) return;
	    cKey.classList.add("control-down");	
		cIn.classList.add("inner-down");
		cDown = true;
		soundSelected = "break3";

  	} 

  	if (event.code == 'KeyV') {
	    if(vDown) return;
	    vKey.classList.add("control-down");	
		vIn.classList.add("inner-down");
		vDown = true;
		soundSelected = "break4";
  	} 
});

document.addEventListener('keyup', function(event) {
	if (event.code == 'KeyA') {
		aKey.classList.remove("control-down");
		aIn.classList.remove("inner-down");	
		aDown = false;
  	} 

  	if (event.code == 'KeyS') {
  		sKey.classList.remove("control-down");
		sIn.classList.remove("inner-down");	
    	sDown = false;
	} 

	if (event.code == 'KeyD') {
		dKey.classList.remove("control-down");
		dIn.classList.remove("inner-down");	
    	dDown = false;
	} 

	if (event.code == 'KeyF') {
		fKey.classList.remove("control-down");
		fIn.classList.remove("inner-down");	
    	fDown = false;
	} 

	if (event.code == 'KeyG') {
		gKey.classList.remove("control-down");
		gIn.classList.remove("inner-down");	
    	fDown = false;
	}

	if (event.code == 'KeyJ') {
		jKey.classList.remove("control-down");
		jIn.classList.remove("inner-down");
    	jDown = false;
	} 
	if (event.code == 'KeyK') {
		kKey.classList.remove("control-down");
		kIn.classList.remove("inner-down");	
    	kDown = false;

	} 

	if (event.code == 'KeyL') {
		lKey.classList.remove("control-down");
		lIn.classList.remove("inner-down");	
    	lDown = false;
    	l = 0;
	} 

	if (event.code == 'KeyO') {
		oKey.classList.remove("control-down");
		oIn.classList.remove("inner-down");	
    	oDown = false;
	} 

	if (event.code == 'KeyP') {
		pKey.classList.remove("control-down");
		pIn.classList.remove("inner-down");	
    	pDown = false;
	}

	if (event.code == 'KeyQ') {
		qKey.classList.remove("control-down");
		qIn.classList.remove("inner-down");	
    	qDown = false;
	} 

	if (event.code == 'KeyW') {
		wKey.classList.remove("control-down");
		wIn.classList.remove("inner-down");	
    	wDown = false;
	} 

	if (event.code == 'KeyZ') {
		zKey.classList.remove("control-down");
		zIn.classList.remove("inner-down");	
    	zDown = false;
	} 

	if (event.code == 'KeyX') {
		xKey.classList.remove("control-down");
		xIn.classList.remove("inner-down");	
    	xDown = false;
	} 

	if (event.code == 'KeyC') {
		cKey.classList.remove("control-down");
		cIn.classList.remove("inner-down");	
    	cDown = false;
	} 
	
	if (event.code == 'KeyV') {
		vKey.classList.remove("control-down");
		vIn.classList.remove("inner-down");	
    	vDown = false;
	} 
});

playBtn.addEventListener("click", function(){
	start();
	playBtn.classList.add("control-down");	
	// playIn.classList.add("inner-down");
});

stopBtn.addEventListener("mousedown", function(){
	stop();
	playBtn.classList.remove("control-down");	
	// playIn.classList.remove("inner-down");
	stopBtn.classList.add("control-down");	
	// stopIn.classList.add("inner-down");
});

stopBtn.addEventListener("mouseup", function(){
	stopBtn.classList.remove("control-down");	
	// stopIn.classList.remove("inner-down");
});

metroSw.addEventListener("click", function(){
	if (metronome === true){
		metronome = false;
		this.classList.remove("met-switch-in");		
	} else {
		metronome = true;
		this.classList.add("met-switch-in");
	}
});