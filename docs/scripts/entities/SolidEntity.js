import Entity from "./Entity.js";
/**
 * Represents a solid entity in the game.
 * A solid entity is an Entity with solid color.
 */
class SolidEntity extends Entity {
    /**
     * @param cssColor Entity color in any valid CSS format
     * @param borderRadius Entity border radius (optional)
     * @param name Name of the entity (optional)
     * @param x Initial x position (optional)
     * @param y Initial y position (optional)
     * @param width Initial width (optional)
     * @param height Initial height (optional)
     */
    constructor(cssColor, borderRadius, name, x, y, width, height) {
        super(name, x, y, width, height);
        this.htmlDiv.style.borderRadius = borderRadius + "px";
        this.htmlDiv.style.backgroundColor = cssColor;
    }
    // getters
    get borderRadius() {
        const borderRadius = this.htmlDiv.style.borderRadius.replace("px", "");
        return Number(borderRadius);
    }
    get color() {
        return this.htmlDiv.style.backgroundColor;
    }
    // setters
    set borderRadius(value) {
        this.htmlDiv.style.borderRadius = value + "px";
    }
    set color(value) {
        this.htmlDiv.style.backgroundColor = value;
    }
}
export default SolidEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29saWRFbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NyaXB0cy9lbnRpdGllcy9Tb2xpZEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFFakM7OztHQUdHO0FBQ0gsTUFBTSxXQUFZLFNBQVEsTUFBTTtJQUM5Qjs7Ozs7Ozs7T0FRRztJQUNILFlBQ0UsUUFBZ0IsRUFDaEIsWUFBb0IsRUFDcEIsSUFBYSxFQUNiLENBQVUsRUFDVixDQUFVLEVBQ1YsS0FBYyxFQUNkLE1BQWU7UUFFZixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFDaEQsQ0FBQztJQUVELFVBQVU7SUFFVixJQUFJLFlBQVk7UUFDZCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVU7SUFFVixJQUFJLFlBQVksQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBRUQsZUFBZSxXQUFXLENBQUMifQ==