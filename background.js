// JavaScript Document
var bgImageArray = ["images.jpg", "homepage.jpg"],
base = "",
secs = 4;
bgImageArray.forEach(function(img){
    new img().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	image.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();