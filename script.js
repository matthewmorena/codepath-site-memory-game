// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 0; //how long to hold each clue's light/sound
var cluePauseTime = 0; //how long to pause in between clues
var mistakes = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  mistakes = 0;
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 13) + 1)}
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  pattern = [];
  mistakes = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if (btn != pattern[guessCounter]) {
    if (mistakes == 2) {
      loseGame();
    }
    else {
      mistakes++;
      alert("That's incorrect. You have " + (3 - mistakes) + " tries remaining.");
      playClueSequence();
    }
  }
  else if (guessCounter < progress) {
    guessCounter++;
  }
  else if (guessCounter == progress) {
    if (progress < pattern.length - 1) {
      progress++;
      clueHoldTime-=100;
      cluePauseTime-=33;
      playClueSequence();
    }
    else {
      winGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 349.2,
  5: 392,
  6: 440,
  7: 493.9,
  8: 523.3,
  
  9: 277.2,
  10: 311.1,
  11: 370,
  12: 415.3,
  13: 466.2,
}

function playTone(btn,len) { 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn) {
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025) 
  tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
o.type = "sawtooth"
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)