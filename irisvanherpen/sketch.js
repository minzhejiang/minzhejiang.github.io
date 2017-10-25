var song;

var sliderRate;


function setup() {
    createCanvas(60,200);
    song=loadSound('https://minzhejiang.github.io/irisvanherpen/asset/water2.mp3', loaded);
    song.setVolume(0.5);
   
}
//callback method to load the song
function loaded(){
	song.loop();
}

function draw() {
    
}