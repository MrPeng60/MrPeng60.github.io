let start = 44284;
let checktime = 2000;
video = document.querySelector('video');
video.volume = 0.1;
video.controls = 1;
video.autoplay = 1;
video.src = "https://cdnp.kink.com/imagedb/"+start+"/v/h/320/hires/"+start+"_7.mp4";
document.title = start;
document.getElementById("vn").innerHTML = start;
video.load();

const interval = setInterval(() => {
  if (!video.readyState && !video.playing) {
		next();
  }
}, checktime);

document.getElementById("vn").onclick = function() {nrand()};

video.addEventListener('loadeddata', function() {
});
video.addEventListener('ended', function() {
	next();
});
video.addEventListener('error', function() {
	nrand();
});

document.onkeydown = function(e) {
    switch (e) {
    	case 39: //right arrow
    		next();
       	break;
    	case 37: //left arrow
    		prev();
    		break;
      case 87: //W
        faster();
        break;
      case 83: //S
        slower();
        break;
      case 68: //D
        forw();
        break;
      case 65: //A
      	back();
        break;
      case 38: //up arrow
      	volup();
        break;
      case 40: //down arow
      	voldn();
      	break;
      case 13: //Enter
		exact();
      	break;
      case 16: //shift
      	nrand();
        break;
      case 32: //spacebar
      	pause();
        break;
    }
}

function nrand(){
	
	maximum = 45000
	minimum = 2000

	hilo = Math.random();

	if(hilo >= 0.5){
		maximum = 120000
		minimum = 100000
	}

	num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	document.title = num;
	document.getElementById("vn").innerHTML = num;
	video.src = getSrc(num);
}

function next(){
	x = parseInt(document.title) + 1;
	document.title = x;
	document.getElementById("vn").innerHTML = x;
	video.src = getSrc(x);
}

function prev(){
	y = parseInt(document.title) - 1;
	document.title = y;
	document.getElementById("vn").innerHTML = y;
	video.src = getSrc(y);
}

function exact(){
	z = parseInt(document.getElementById('tb').value);
	document.title = z;
	document.getElementById("vn").innerHTML = z;
	video.src = getSrc(z);
}

function volup(){
	video.volume <= 0.9 ? video.volume = video.volume+0.1: video.volume=1;
}

function voldn(){
	video.volume >= 0.11 ? video.volume = video.volume-0.1: video.volume=0.01;
}

function pause(){
	video.paused ? video.play() : video.pause();
}

function forw(){
	video.currentTime += 2;
}

function back(){
	video.currentTime -= 2;
}

function faster(){
	video.playbackRate <= 3.9 ? video.playbackRate += 0.1 : video.playbackRate = 4;
}

function slower(){
	video.playbackRate >= 0.2 ? video.playbackRate -= 0.1 : video.playbackRate = 0.1;
}

function getSrc(i){
	if(i >= 100000){
		return "https://cdnp.kink.com/imagedb/"+i+"/trailer/"+i+"_trailer_high.mp4";
	} else {
		return "http://cdnp.kink.com/imagedb/"+i+"/v/h/320/hires/"+i+"_7.mp4";
	}
}

/*
	100k https://cdnp.kink.com/imagedb/104792/trailer/104792_trailer_high.mp4
	30k "https://cdnp.kink.com/imagedb/44284/v/h/320/hires/44284_7.mp4"
	*/
