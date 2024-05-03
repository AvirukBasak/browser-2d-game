import SolidEntity from "./entities/SolidEntity.js";

const Canvas = document.getElementById("canvas") || document.body;

// within the bounds of the canvas
const CANVAS_WIDTH = Canvas.scrollWidth;
const CANVAS_HEIGHT = Canvas.scrollHeight;

const BALL_WIDTH = 50;
const BALL_HEIGHT = 50;

const BALL_XINIT = CANVAS_WIDTH / 2 - BALL_WIDTH / 2;
const BALL_YINIT = CANVAS_HEIGHT / 2 - BALL_HEIGHT / 2;

const entity = new SolidEntity(
  "red",
  100,
  "circle1",
  BALL_XINIT,
  BALL_YINIT,
  BALL_WIDTH,
  BALL_HEIGHT
);
entity.render();

window.addEventListener("keydown", function (event) {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    console.log(
      `x: ${entity.x}, y: ${entity.y}, width: ${entity.width}, height: ${entity.height}`
    );
  }

  const { topBoundPosn, bottomBoundPosn, leftBoundPosn, rightBoundPosn } =
    entity;

  // up arrow
  if (event.key === "ArrowUp") {
    if (topBoundPosn > 0) entity.moveBy(0, -10);
  }
  // down arrow
  if (event.key === "ArrowDown") {
    if (bottomBoundPosn < CANVAS_HEIGHT) entity.moveBy(0, 10);
  }
  // left arrow
  if (event.key === "ArrowLeft") {
    if (leftBoundPosn > 0) entity.moveBy(-10, 0);
  }
  // right arrow
  if (event.key === "ArrowRight") {
    if (rightBoundPosn < CANVAS_WIDTH) entity.moveBy(10, 0);
  }

  // home
  if (event.key === "Home") {
    entity.moveTo(BALL_XINIT, BALL_YINIT);
  }

  // spacebar
  if (event.key === " ") {
    const currentColor = entity.color;
    entity.color = currentColor === "red" ? "blue" : "red";
  }
});
