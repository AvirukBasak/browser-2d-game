import SolidEntity from "./entities/SolidEntity.js";

const Canvas = document.getElementById("canvas") || document.body;

Canvas.style.width = "100vw";
Canvas.style.height = "100vh";

// within the bounds of the canvas
const canvasWidth = Canvas.scrollWidth;
const canvasHeight = Canvas.scrollHeight;

const entityWidth = 100;
const entityHeight = 100;

const entityInitialX = canvasWidth / 2 - entityWidth / 2;
const entityInitialY = canvasHeight / 2 - entityHeight / 2;

const entity = new SolidEntity(
  "red",
  100,
  "circle1",
  entityInitialX,
  entityInitialY,
  entityWidth,
  entityHeight
);
entity.render();

window.addEventListener(
  "keydown",
  function (event) {
    const { x, y, left, top, width, height } = {
      x: entity.x,
      y: entity.y,
      left: entity.x,
      top: entity.y,
      width: entity.width,
      height: entity.height,
    };

    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
    ) {
      console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
    }

    // up arrow
    if (event.key === "ArrowUp") {
      if (top > 0) entity.moveBy(0, -10);
    }
    // down arrow
    if (event.key === "ArrowDown") {
      if (top < canvasHeight) entity.moveBy(0, 10);
    }
    // left arrow
    if (event.key === "ArrowLeft") {
      if (left > 0) entity.moveBy(-10, 0);
    }
    // right arrow
    if (event.key === "ArrowRight") {
      if (left < canvasWidth) entity.moveBy(10, 0);
    }

    // home
    if (event.key === "Home") {
      entity.moveTo(entityInitialX, entityInitialY);
    }

    // spacebar
    if (event.key === " ") {
      const currentColor = entity.color;
      entity.color = currentColor === "red" ? "blue" : "red";
    }
  },
  true
);
