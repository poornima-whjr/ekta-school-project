var PLAY = 1;
var END = 0;

var submarine;
var submarineImg;
var sea;
var invBg;
var gameState = PLAY;
var obstacleGroup;

var diverImg, whaleImg;



function preload() {
  submarineImg = loadImage("images/sub.png")
  seaImg = loadImage("images/bg.png");
  diverImg = loadImage("images/obs2.png");
  whaleImg = loadImage("images/obs1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sea = createSprite(500, windowHeight / 2, 10, 10);
  sea.addImage(seaImg);
  sea.velocityX = -20;
  submarine = createSprite(windowWidth / 6, windowHeight / 2, 50, 50);
  submarine.addImage(submarineImg);
  submarine.scale = 1.5;
  invBg = createSprite(windowWidth / 2, windowHeight, windowWidth, 20);

  obstacleGroup = new Group();
}

function draw() {
  
  if (gameState === PLAY) {

    if (sea.x < 0) {

      sea.x = sea.width / 2;
    }


    if (keyWentDown("up")) {
      submarine.velocityY = -5;
    }
    if (keyWentUp("up")) {
      submarine.velocityY = 0;

    }
    if (keyWentUp("down")) {
      submarine.velocityY = 0;
    }
    if (keyWentDown("down")) {
      submarine.velocityY = 5;
    }
    invBg.visible = false;

    obstacles();
  }
  drawSprites();

}

function obstacles() {
  
  if (World.frameCount % 80 === 0) {
    var obstacle = createSprite(width, 200, 20, 20);
    obstacle.y = Math.round(random(500, 900));
    //create switch statement
    rand = Math.round(random(1, 2));
    switch (rand) {
      case 1: obstacle.addImage(whaleImg);
        break;
      case 2: obstacle.addImage(diverImg);
        break;
      default: break;


    }
    obstacle.velocityX = -20;
    obstacle.depth = submarine.depth + 1;
  }
}