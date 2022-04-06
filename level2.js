class Level2{
    constructor(){

    }

    spawnObstacles3() {
        if (frameCount % 60 === 0) {
          organicTrash = createSprite(100, -2, 10, 10);
          organicTrash.x = Math.round(random(100, windowWidth - 200));
          organicTrash.addImage(organicWasteImg);
          organicTrash.scale = 0.6;
          organicTrash.lifetime = windowHeight / 4;
          organicTrash.velocityY = 1;
          organicTrashGroup.add(organicTrash);
        }
      }
}