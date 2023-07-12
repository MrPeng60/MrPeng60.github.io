const iframe = document.querySelector('iframe');
iframe.addEventListener('load', () => {
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const video = iframeDocument.querySelector('video');
  video.addEventListener('ended', () => {
    console.log('Video ended');
		next();
  });
	video.addEventListener('error', () => {
    console.log('Video threw an error');
		nrand();
  });
});

function nrand(){
	iframe.setAttribute("src", "https://cdnp.kink.com/imagedb/104792/trailer/104792_trailer_high.mp4");
}
function next(){
	iframe.setAttribute("src", "https://cdnp.kink.com/imagedb/104792/trailer/104792_trailer_high.mp4");
}
function prev(){
	iframe.setAttribute("src", "the source");
}

function volup(){

}
function voldown(){

}

function pause(){

}
function forw(){

}
function back(){

}

function faster(){

}
function slower(){

}

/*
	100k https://cdnp.kink.com/imagedb/104792/trailer/104792_trailer_high.mp4
	30k https://cdnp.kink.com/imagedb/37843/v/h/320/hires/37843_7.mp4
	*/
