class GameState {
  constructor() {}

  start() {
    start1 = createSprite(windowWidth / 2, windowHeight / 2 - 200);
    start1.addImage(startButtonImg1);
    start1.scale = 1;
    start1.visible = false;

    //---------------->>>> LEVEL 1 Info<<<--------------------------------

    level1 = createSprite(windowWidth / 2 - 350, windowHeight / 2 - 50);
    level1.scale = 1;
    level1.visible = false;
    level1.debug = true;
    level1.setCollider(
      "rectangle",
      -64,
      -100,
      level1.width + 230,
      level1.height + 40
    );
    level1.addImage("level", level1Img);

    //---------------->>>> LEVEL 2 Info<<<--------------------------------

    level2 = createSprite(windowWidth / 2 + 450, windowHeight / 2 - 50);
    level2.scale = 1;
    level2.visible = false;
    level2.debug = true;
    level2.setCollider(
      "rectangle",
      -60,
      -100,
      level1.width - 248,
      level1.height - 270
    );
    level2.addImage("level0", level2Img);

    level1Information = createSprite(700, windowHeight / 2 + 50);
    level1Information.addImage(level1InformationImg);
    level1Information.scale = 2;
    level1Information.visible = false;

    level2Information = createSprite(1010, windowHeight / 2 + 50);
    level2Information.addImage(level2InformationImg);
    level2Information.scale = 2;
    level2Information.visible = false;

    exitfromLevel1 = createSprite(windowWidth / 2 + 350, 100);
    exitfromLevel1.addImage(exitButtonImg);
    exitfromLevel1.visible = false;
    exitfromLevel1.scale = 0.3;

    exitfromLevel2 = createSprite(windowWidth / 2 + 350, 100);
    exitfromLevel2.addImage(exitButtonImg);
    exitfromLevel2.visible = false;
    exitfromLevel2.scale = 0.3;
  }


  play() {
    bg1.visible = true;
    level1.visible = true; //-------------> level 1 button
    level1.debug = true;
    gamelogo.visible = false;
    bg.visible = false;
    start.visible = false;
    start1.visible = true;
    informationButton.visible = false;
    level1Information.visible = false;
    level2.visible = true; //-------------> level 2 button

    bg1.velocityX = -3;
    if (bg1.x < windowWidth / 2 - 100) {
      bg1.x = windowWidth / 2;
    }
  }
}
