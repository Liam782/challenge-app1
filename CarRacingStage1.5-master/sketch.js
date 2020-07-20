var canvas;

var gameState = 0;
var playerCount;
var allPlayers = [];
var progress = 0;
var database;

var form, player, game;

var players = [];

function preload(){
  
}


function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  app = new App();
  app.getState();
  app.start();
}


function draw(){
  if(playerCount === 10){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    app.homePage();
  }
  if(gameState === 2){
    app.displayRace();
  }
}
