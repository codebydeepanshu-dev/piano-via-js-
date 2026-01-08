// var a = new Audio("./piano-chords-239967.mp3");
// var s = new Audio("./soft-piano-100-bpm-121529.mp3");
// var d = new Audio("./piano-chords-239967.mp3");
// var f = new Audio("./soft-piano-100-bpm-121529.mp3");
// var g = new Audio("./angelical-pad-143276.mp3");

// function stopAll(){
//   a.pause(); a.currentTime = 0;
//   s.pause(); s.currentTime = 0;
//   d.pause(); d.currentTime = 0;
//   f.pause(); f.currentTime = 0;
//   g.pause(); g.currentTime = 0;
// }

// document.addEventListener("keydown", function(e){
//   stopAll();

//   if(e.key === "a") a.play();
//   if(e.key === "s") s.play();
//   if(e.key === "d") d.play();
//   if(e.key === "f") f.play();
//   if(e.key === "g") g.play();
// });

// var keys = document.querySelectorAll(".key");
// var body = document.body;

// keys.forEach(function(btn){
//   btn.addEventListener("click", function(){
//     stopAll();

//     var k = btn.innerText.toLowerCase();


//     if(k === "a") a.play();
//     if(k === "s") s.play();
//     if(k === "d") d.play();
//     if(k === "f") f.play();
//     if(k === "g") g.play();
//   });
// });
/////////////////////////////////////////////
var sounds = {
  a: new Audio("./piano-chords-239967.mp3"),
  s: new Audio("./soft-piano-100-bpm-121529.mp3"),
  d: new Audio("./piano-chords-239967.mp3"),
  f: new Audio("./soft-piano-100-bpm-121529.mp3"),
  g: new Audio("./angelical-pad-143276.mp3")
};

function stopAll() {
  for (var key in sounds) {
    sounds[key].pause();
    sounds[key].currentTime = 0;
  }
}

// 🎹 Keyboard
document.addEventListener("keydown", function (e) {
  if (sounds[e.key]) {
    stopAll();
    sounds[e.key].play();
  }
});
//git
// 🖱️ Mouse
document.querySelectorAll(".key").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var k = btn.dataset.key;
    if (sounds[k]) {
      stopAll();
      sounds[k].play();
    }
  });
});
