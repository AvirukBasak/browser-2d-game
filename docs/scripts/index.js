import { CANVAS_WIDTH, CANVAS_HEIGHT, Ghost, Protagonist } from "./init.js";
// the protagonist needs to avoid colliding with the ghosts
const protagonist = new Protagonist();
const Ghosts = [];
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
        console.log(`x: ${protagonist.entity.x}, y: ${protagonist.entity.y}, width: ${protagonist.entity.width}, height: ${protagonist.entity.height}`);
    }
    const { topBoundPosn, bottomBoundPosn, leftBoundPosn, rightBoundPosn } = protagonist.entity;
    // up arrow
    if (event.key === "ArrowUp") {
        if (topBoundPosn > 0)
            protagonist.moveUp();
    }
    // down arrow
    if (event.key === "ArrowDown") {
        if (bottomBoundPosn < CANVAS_HEIGHT)
            protagonist.moveDown();
    }
    // left arrow
    if (event.key === "ArrowLeft") {
        if (leftBoundPosn > 0)
            protagonist.moveLeft();
    }
    // right arrow
    if (event.key === "ArrowRight") {
        if (rightBoundPosn < CANVAS_WIDTH)
            protagonist.moveRight();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NyaXB0cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVFLDJEQUEyRDtBQUMzRCxNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBRXRDLE1BQU0sTUFBTSxHQUFZLEVBQUUsQ0FBQztBQUMzQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBRXZCLDRDQUE0QztBQUM1QyxNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO0lBQ3JDLHFFQUFxRTtJQUNyRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZFLDZFQUE2RTtJQUM3RSxJQUFJLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFDcEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1B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