/**
 * Represents an entity in the game.
 * An entity is a game object that can be rendered on the screen.
 * It can have children entities that are rendered relative to the parent entity.
 * All entities are positioned absolutely on the screen but once rendered, move relative to the parent entity.
 */
class Entity {
  protected id: number;
  protected name: string | null = null;
  protected htmlDiv: HTMLDivElement;
  protected parent: Entity | null;
  protected children: Map<number, Entity>;

  /**
   * @param x Initial x position (default 0)
   * @param y Initial y position (default 0)
   * @param width Initial width (default 50)
   * @param height Initial height (default 50)
   */
  constructor(
    name?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ) {
    this.htmlDiv = document.createElement("div");
    this.htmlDiv.style.position = "absolute";

    if (typeof x === "number") this.htmlDiv.style.left = x + "px";
    if (typeof y === "number") this.htmlDiv.style.top = y + "px";
    if (typeof width === "number") this.htmlDiv.style.width = width + "px";
    if (typeof height === "number") this.htmlDiv.style.height = height + "px";

    this.htmlDiv.style.backgroundColor = "transparent";
    this.htmlDiv.style.margin = "0";
    this.htmlDiv.style.padding = "0";

    this.id = NaN;
    this.name = name || null;
    this.parent = null;
    this.children = new Map<number, Entity>();
  }

  // getters

  get x() {
    return this.htmlDiv.offsetLeft;
  }

  get y() {
    return this.htmlDiv.offsetTop;
  }

  get width() {
    return this.htmlDiv.scrollWidth;
  }

  get height() {
    return this.htmlDiv.scrollHeight;
  }

  get zIndex() {
    return Number(this.htmlDiv.style.zIndex);
  }

  // setters
  set x(value: number) {
    this.htmlDiv.style.left = value + "px";
  }

  set y(value: number) {
    this.htmlDiv.style.top = value + "px";
  }

  set width(value: number) {
    this.htmlDiv.style.width = value + "px";
  }

  set height(value: number) {
    this.htmlDiv.style.height = value + "px";
  }

  set zIndex(value: number) {
    this.htmlDiv.style.zIndex = "" + value;
  }

  // methods

  /**
   * Renders the entity on the screen
   */
  render() {
    for (const [_, child] of this.children.entries()) {
      child.render();
    }
    document.body.appendChild(this.htmlDiv);
  }

  /**
   * Removes the entity from the screen.
   * Also removes all children of the entity.
   */
  remove() {
    for (const [_, child] of this.children.entries()) {
      child.remove();
    }
    this.removeFromParent();
    this.htmlDiv.remove();
  }

  moveTo(x: number, y: number) {
    const dx = x - this.x;
    const dy = y - this.y;
    for (const [_, child] of this.children.entries()) {
      child.moveBy(dx, dy);
    }
    this.moveBy(dx, dy);
  }

  moveBy(dx: number, dy: number) {
    for (const [_, child] of this.children.entries()) {
      child.moveBy(dx, dy);
    }
    this.x += dx;
    this.y += dy;
  }

  resizeTo(width: number, height: number) {
    const dw = width - this.width;
    const dh = height - this.height;
    for (const [_, child] of this.children.entries()) {
      child.resizeBy(dw, dh);
    }
    this.resizeBy(dw, dh);
  }

  resizeBy(dw: number, dh: number) {
    for (const [_, child] of this.children.entries()) {
      child.resizeBy(dw, dh);
    }
    this.width += dw;
    this.height += dh;
  }

  scaleBy(fx: number) {
    for (const [_, child] of this.children.entries()) {
      child.scaleBy(fx);
    }
    this.width *= fx;
    this.height *= fx;
  }

  /**
   * @param dz The change in z-index
   */
  dzBy(dz: number) {
    for (const [_, child] of this.children.entries()) {
      child.dzBy(dz);
    }
    this.zIndex += dz;
  }

  /**
   * @param entity The entity to add as a child
   * @returns The id of the entity added
   */
  addChild(entity: Entity) {
    entity.id = Object.keys(this.children).length;
    entity.parent = this;
    this.children.set(entity.id, entity);
    return entity.id;
  }

  /**
   * @param id The id of the entity to remove
   */
  removeChild(id: number) {
    this.children.get(id)?.remove();
    this.children.delete(id);
  }

  /**
   * Removes the entity from its parent.
   */
  removeFromParent() {
    if (!this.parent) return;
    if (isNaN(this.id)) return;
    this.parent.removeChild(this.id);
  }
}

export default Entity;
