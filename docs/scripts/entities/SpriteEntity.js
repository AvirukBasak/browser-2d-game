import Entity from "./Entity.js";
/**
 * Represents a sprite entity in the game.
 * A sprite entity is an Entity with an image.
 */
class SpriteEntity extends Entity {
    /**
     * @param imgSrc Image source as URL or base64 syntax
     * @param name Name of the entity (optional)
     * @param x Initial x position (optional)
     * @param y Initial y position (optional)
     * @param width Initial width (optional)
     * @param height Initial height (optional)
     */
    constructor(imgSrc, name, x, y, width, height) {
        super(name, x, y, width, height);
        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.width = "100%";
        img.alt = name || "";
        img.style.margin = "0";
        img.style.padding = "0";
        this.htmlDiv.appendChild(img);
    }
    get imgSrc() {
        var _a;
        return ((_a = this.htmlDiv.querySelector("img")) === null || _a === void 0 ? void 0 : _a.src) || "";
    }
    // setters
    set imgSrc(value) {
        this.htmlDiv.querySelector("img").src = value;
    }
}
export default SpriteEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ByaXRlRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjcmlwdHMvZW50aXRpZXMvU3ByaXRlRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUVqQzs7O0dBR0c7QUFDSCxNQUFNLFlBQWEsU0FBUSxNQUFNO0lBQy9COzs7Ozs7O09BT0c7SUFDSCxZQUNFLE1BQWMsRUFDZCxJQUFhLEVBQ2IsQ0FBVSxFQUNWLENBQVUsRUFDVixLQUFjLEVBQ2QsTUFBZTtRQUVmLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNqQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDekIsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN2QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksTUFBTTs7UUFDUixPQUFPLENBQUEsTUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsMENBQUUsR0FBRyxLQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsVUFBVTtJQUVWLElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFFRCxlQUFlLFlBQVksQ0FBQyJ9