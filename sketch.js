var gameState = "beginning";
var obstaclesGroup,
  glassTrashImg,
  metalTrashImg,
  plasticTrashImg,
  organicWasteImg,
  exitButton,
  glassTrash,
  plasticTrash,
  start1,
  level1, level2, level1Information, level2Information, metalTrash,
  exitFromInfo, exitfromLevel1, exitfromLevel2,
  metalTrash;

function preload() {
  loganImg = loadImage("images/loganPc.png");
  emilyImg = loadImage("images/emily.png");
  carsonImg = loadImage("images/carson.png");
  trashImg = loadImage("images/trash.png");
  gameLogoImg = loadImage("images/gameLogo.png");
  backgroundImg = loadImage("images/backgroundImg.jpg");
  startbuttonImg = loadImage("images/startButton.png");
  background1 = loadImage("images/background1.jpg");
  storyImg = loadImage("images/story.png");
  informationImg = loadImage("images/informationButton.png");
  glassTrashImg = loadImage("images/glassTrash.png");
  metalTrashImg = loadImage("images/metalTrash.png");
  plasticTrashImg = loadImage("images/plasticTrash.png");
  exitButtonImg = loadImage("images/exitButton.png");
  level1Img = loadImage("images/level1.png");
  level2Img = loadImage("images/level2.png");
  startButtonImg1 = loadImage("images/startButton1.png");
  level1InformationImg = loadImage("images/level1Information.png");
  level2InformationImg = loadImage("images/level2Information.png");
  organicWasteImg = loadImage("images/organicWaste.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Create the Bodies Here.
  bg = createSprite(400, 350);
  bg.addImage(backgroundImg);
  bg.scale = 2.8;

  bg1 = createSprite(400, 350);
  bg1.addImage(background1);
  bg1.scale = 1.2;
  bg1.visible = false;

  gamelogo = createSprite(windowWidth / 2, windowHeight / 2);
  gamelogo.addImage(gameLogoImg);
  gamelogo.scale = 1.4;

  logan = createSprite(windowWidth / 2 - 50, windowHeight - 150);
  logan.addImage(loganImg);
  logan.scale = 1;
  logan.visible = false;

  emily = createSprite(windowWidth / 2 - 150, windowHeight - 150);
  emily.addImage(emilyImg);
  emily.scale = 0.4;
  emily.visible = false;

  carson = createSprite(windowWidth / 1.9 - 1, windowHeight - 180);
  carson.addImage(carsonImg);
  carson.scale = 0.5;
  carson.visible = false;

  ground = createSprite(windowWidth / 2, windowHeight - 50, windowWidth, 10);

  start = createSprite(windowWidth / 2, windowHeight / 2 + 100);
  start.addImage(startbuttonImg);
  start.scale = 1;
  start.visible = false;

  informationButton = createSprite(windowWidth / 2, windowHeight / 2 + 160);
  informationButton.addImage(informationImg);
  informationButton.scale = 0.1;
  informationButton.visible = false;

  information = createSprite(700, windowHeight / 2 + 50);
  information.addImage(storyImg);
  information.scale = 2;
  information.visible = false;

  exitFromInfo = createSprite(windowWidth / 2 + 350, 190);
  exitFromInfo.scale = 0.3;
  exitFromInfo.visible = false;
  exitFromInfo.addImage(exitButtonImg);

  glassTrashGroup = new Group();
  metalTrashGroup = new Group();
  plasticTrashGroup = new Group();
  organicTrashGroup = new Group();

  game = new GameState();
  level1 = new Level1();
}

function draw() {
  background(0);

  //-----------------> START <-----------------
  if (gameState === "beginning") {
    start.visible = true;
    informationButton.visible = true;
    logan.visible = true;
    emily.visible = true;
    carson.visible = true;

    if (mousePressedOver(start)) {
      gameState = "level1";
    }

  }

  //-----------------> level1 <-----------------
  if(gameState === "level1"){
    bg.visible = false;
    bg1.visible = true;

    start.visible = false;
    informationButton.visible = false;
    gamelogo.visible= false;
    logan.visible = true;
    emily.visible = true;
    carson.visible = true;

    level1.levelinPlay();
  }


  drawSprites();
}

