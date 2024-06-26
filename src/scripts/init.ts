import SolidEntity from "./entities/SolidEntity.js";
import { getRandomColor } from "./utils/colors.js";

const Canvas = document.getElementById("canvas") || document.body;

// within the bounds of the canvas
export const CANVAS_WIDTH = Canvas.scrollWidth;
export const CANVAS_HEIGHT = Canvas.scrollHeight;

export class Protagonist {
  initX: number;
  initY: number;
  moveBy: number;
  entity: SolidEntity;

  constructor() {
    const width = 50;
    const height = 50;
    this.initX = CANVAS_WIDTH / 2 - width / 2;
    this.initY = CANVAS_HEIGHT / 2 - height / 2;
    this.moveBy = 7;
    this.entity = new SolidEntity(
      "green",
      100,
      "Protagonist",
      this.initX,
      this.initY,
      width,
      height
    );
    this.entity.render();
  }

  moveUp() {
    this.entity.moveBy(0, -this.moveBy);
  }

  moveDown() {
    this.entity.moveBy(0, this.moveBy);
  }

  moveLeft() {
    this.entity.moveBy(-this.moveBy, 0);
  }

  moveRight() {
    this.entity.moveBy(this.moveBy, 0);
  }

  isCollidingWithGhost(ghost: Ghost): boolean {
    if (
      this.entity.leftBoundPosn < ghost.entity.rightBoundPosn &&
      this.entity.rightBoundPosn > ghost.entity.leftBoundPosn &&
      this.entity.topBoundPosn < ghost.entity.bottomBoundPosn &&
      this.entity.bottomBoundPosn > ghost.entity.topBoundPosn
    ) {
      return true;
    }
    return false;
  }
}

export class Ghost {
  initX: number;
  initY: number;
  moveBy: number;

  dirX: number;
  dirY: number;

  entity: SolidEntity;

  constructor() {
    const width = 15;
    const height = 15;
    this.initX = Math.random() * CANVAS_WIDTH - 16;
    this.initY = Math.random() * CANVAS_HEIGHT - 16;
    this.moveBy = 7;
    this.dirX = 1;
    this.dirY = 1;

    // chhose random color i.e. not green
    let randomColor = getRandomColor();
    while (randomColor === "#00FF00") {
      randomColor = getRandomColor();
    }

    this.entity = new SolidEntity(
      "red",
      100,
      "Ghost" + Number(Math.random() * 100),
      this.initX,
      this.initY,
      width,
      height
    );
    this.entity.render();
  }

  changeDirection() {
    this.dirX = [0, 1, -1][Math.floor(Math.random() * 3)];
    this.dirY = [0, 1, -1][Math.floor(Math.random() * 3)];
  }

  move() {
    const dx = this.moveBy * this.dirX;
    const dy = this.moveBy * this.dirY;
    if (this.entity.topBoundPosn + dy > 0 && this.entity.bottomBoundPosn + dy < CANVAS_HEIGHT) {
      this.entity.moveBy(0, dy);
    }
    if (this.entity.leftBoundPosn + dx > 0 && this.entity.rightBoundPosn + dx < CANVAS_WIDTH) {
      this.entity.moveBy(dx, 0);
    }
  }
}
