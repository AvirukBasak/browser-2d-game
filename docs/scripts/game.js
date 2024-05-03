import { CANVAS_WIDTH, CANVAS_HEIGHT, Ghost, Protagonist } from "./index";
// the protagonist needs to avoid colliding with the ghosts
const protagonist = new Protagonist();
const Ghosts = [];
// adds ghosts to the canvas every 2 seconds
setInterval(() => {
    // create a new ghost
    const newGhost = new Ghost();
    Ghosts.push(newGhost);
    // decide whether to remove a random ghost
    const removeRandomGhost = [true, false][Math.floor(Math.random() * 2)];
    // remove a random ghost as well
    if (removeRandomGhost) {
        const randomIndex = Math.floor(Math.random() * Ghosts.length);
        const ghostToRemove = Ghosts[randomIndex];
        ghostToRemove.entity.remove();
        Ghosts.splice(randomIndex, 1);
    }
}, 2000);
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
    //   // spacebar
    //   if (event.key === " ") {
    //     const currentColor = protagonist.entity.color;
    //     protagonist.entity.color = currentColor === "red" ? "blue" : "red";
    //   }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL2dhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUUxRSwyREFBMkQ7QUFDM0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUV0QyxNQUFNLE1BQU0sR0FBWSxFQUFFLENBQUM7QUFFM0IsNENBQTRDO0FBQzVDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7SUFDZixxQkFBcUI7SUFDckIsTUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLDBDQUEwQztJQUMxQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkUsZ0NBQWdDO0lBQ2hDLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN0QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztBQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVULE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxLQUFLO0lBQ2hELElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FDVCxNQUFNLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxhQUFhLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQ25JLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxHQUNwRSxXQUFXLENBQUMsTUFBTSxDQUFDO0lBRXJCLFdBQVc7SUFDWCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxZQUFZLEdBQUcsQ0FBQztZQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsYUFBYTtJQUNiLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLGVBQWUsR0FBRyxhQUFhO1lBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFDRCxhQUFhO0lBQ2IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksYUFBYSxHQUFHLENBQUM7WUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNELGNBQWM7SUFDZCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssWUFBWSxFQUFFLENBQUM7UUFDL0IsSUFBSSxjQUFjLEdBQUcsWUFBWTtZQUFFLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsT0FBTztJQUNQLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxNQUFNLEVBQUUsQ0FBQztRQUN6QixXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixxREFBcUQ7SUFDckQsMEVBQTBFO0lBQzFFLE1BQU07QUFDUixDQUFDLENBQUMsQ0FBQyJ9