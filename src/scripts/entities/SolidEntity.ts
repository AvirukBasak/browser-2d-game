import Entity from "./Entity";

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
  constructor(
    cssColor: string,
    borderRadius: number,
    name?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ) {
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

  set borderRadius(value: number) {
    this.htmlDiv.style.borderRadius = value + "px";
  }

  set color(value: string) {
    this.htmlDiv.style.backgroundColor = value;
  }
}

export default SolidEntity;
