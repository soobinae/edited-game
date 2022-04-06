class Level1 {
  constructor() {}

  spawnObstacles() {
    if (frameCount % 60 === 0) {
      glassTrash = createSprite(100, -2, 10, 10);
      glassTrash.x = Math.round(random(100, windowWidth - 200));
      glassTrash.addImage(glassTrashImg);
      glassTrash.scale = 0.6;
      glassTrash.lifetime = windowHeight / 4;
      glassTrash.velocityY = 4;
      glassTrashGroup.add(glassTrash);
    }
  }

  spawnObstacles1() {
    if (frameCount % 60 === 0) {
      metalTrash = createSprite(100, -2, 10, 10);
      metalTrash.x = Math.round(random(100, windowWidth - 200));
      metalTrash.addImage(metalTrashImg);
      metalTrash.scale = 0.1;
      metalTrash.velocityY = 2;
      metalTrashGroup.add(metalTrash);
    }
  }

  spawnObstacles2() {
    if (frameCount % 60 === 0) {
      plasticTrash = createSprite(100, -2, 10, 10);
      plasticTrash.x = Math.round(random(100, windowWidth - 200));
      plasticTrash.addImage(plasticTrashImg);
      plasticTrash.scale = 0.6;
      plasticTrash.lifetime = windowHeight / 4;
      plasticTrash.velocityY = 5;
      plasticTrashGroup.add(plasticTrash);
    }
  }

  levelinPlay() {
    this.spawnObstacles();
    this.spawnObstacles1();
    this.spawnObstacles2();
  }


}
