import { CANVAS_WIDTH, CANVAS_HEIGHT, Ghost, Protagonist } from "./init.js";

// the protagonist needs to avoid colliding with the ghosts
const protagonist = new Protagonist();

const Ghosts: Ghost[] = [];
const MIN_GHOSTS = 50;
const MAX_GHOSTS = 250;

// adds ghosts to the canvas every 2 seconds
const spawnInterval = setInterval(() => {
  // create a new ghost if there are less than the max number of ghosts
  if (Ghosts.length < MAX_GHOSTS) {
    const newGhost = new Ghost();
    Ghosts.push(newGhost);
  }

  // decide whether to remove a random ghost
  const removeRandomGhost = [true, false][Math.floor(Math.random() * 2)];

  // remove a random ghost as well only if minimum number of ghosts is exceeded
  if (removeRandomGhost && Ghosts.length > MIN_GHOSTS) {
    const randomIndex = Math.floor(Math.random() * Ghosts.length);
    const ghostToRemove = Ghosts[randomIndex];
    ghostToRemove.entity.remove();
    Ghosts.splice(randomIndex, 1);
  }

  // change ghost directions
  Ghosts.forEach((ghost) => ghost.changeDirection());
}, 2000);

const moveInterval = setInterval(() => {
  // move all the ghosts
  Ghosts.forEach((ghost) => ghost.move());
}, 100);

window.addEventListener("keydown", function (event) {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    console.log(
      `x: ${protagonist.entity.x}, y: ${protagonist.entity.y}, width: ${protagonist.entity.width}, height: ${protagonist.entity.height}`
    );
  }

  const { topBoundPosn, bottomBoundPosn, leftBoundPosn, rightBoundPosn } =
    protagonist.entity;

  // up arrow
  if (event.key === "ArrowUp") {
    if (topBoundPosn > 0) protagonist.moveUp();
  }
  // down arrow
  if (event.key === "ArrowDown") {
    if (bottomBoundPosn < CANVAS_HEIGHT) protagonist.moveDown();
  }
  // left arrow
  if (event.key === "ArrowLeft") {
    if (leftBoundPosn > 0) protagonist.moveLeft();
  }
  // right arrow
  if (event.key === "ArrowRight") {
    if (rightBoundPosn < CANVAS_WIDTH) protagonist.moveRight();
  }

  // home
  if (event.key === "Home") {
    protagonist.entity.moveTo(protagonist.initX, protagonist.initY);
  }

  // check protagonist collision with ghosts
  Ghosts.forEach((ghost) => {
    if (protagonist.isCollidingWithGhost(ghost)) {
      console.log("Game Over!");
      clearInterval(spawnInterval);
      clearInterval(moveInterval);
      protagonist.entity.remove();
      Ghosts.forEach((ghost) => ghost.entity.remove());
      alert("W A S T E D !!!");
    }
  });
});
