import SolidEntity from "./entities/SolidEntity";

const Canvas =
  document.getElementById("canvas") || document.createElement("div");

Canvas.style.width = "700px";
Canvas.style.height = "600px";

const entity = new SolidEntity("red", 100, "entity", 0, 0, 50, 50);

window.addEventListener(
  "keydown",
  function (event) {
    console.log(event.key + " was pressed");

    // within the bounds of the canvas
    const canvasWidth = Canvas.clientWidth;
    const canvasHeight = Canvas.clientHeight;
    const { left, top, width, height } = {
      left: entity.x,
      top: entity.y,
      width: entity.width,
      height: entity.height,
    };

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

    // spacebar
    if (event.key === " ") {
      const currentColor = entity.color;
      entity.color = currentColor === "red" ? "blue" : "red";
    }
  },
  true
);
