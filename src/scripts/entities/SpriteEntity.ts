import Entity from "./Entity";

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
  constructor(
    imgSrc: string,
    name?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ) {
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
    return this.htmlDiv.querySelector("img")?.src || "";
  }

  // setters

  set imgSrc(value: string) {
    this.htmlDiv.querySelector("img")!.src = value;
  }
}

export default SpriteEntity;
