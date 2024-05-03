/**
 * Represents an entity in the game.
 * An entity is a game object that can be rendered on the screen.
 * It can have children entities that are rendered relative to the parent entity.
 * All entities are positioned absolutely on the screen but once rendered, move relative to the parent entity.
 */
class Entity {
    /**
     * @param x Initial x position (default 0)
     * @param y Initial y position (default 0)
     * @param width Initial width (default 50)
     * @param height Initial height (default 50)
     */
    constructor(name, x, y, width, height) {
        this.name = null;
        this.htmlDiv = document.createElement("div");
        this.htmlDiv.style.position = "absolute";
        if (name)
            this.htmlDiv.id = name;
        if (typeof x === "number")
            this.htmlDiv.style.left = x + "px";
        if (typeof y === "number")
            this.htmlDiv.style.top = y + "px";
        if (typeof width === "number")
            this.htmlDiv.style.width = width + "px";
        if (typeof height === "number")
            this.htmlDiv.style.height = height + "px";
        this.htmlDiv.style.backgroundColor = "transparent";
        this.htmlDiv.style.margin = "0";
        this.htmlDiv.style.padding = "0";
        this.id = NaN;
        this.name = name || null;
        this.parent = null;
        this.children = new Map();
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
    get topBoundPosn() {
        return this.y;
    }
    get bottomBoundPosn() {
        return this.y + this.height;
    }
    get leftBoundPosn() {
        return this.x;
    }
    get rightBoundPosn() {
        return this.x + this.width;
    }
    // setters
    set x(value) {
        this.htmlDiv.style.left = value + "px";
    }
    set y(value) {
        this.htmlDiv.style.top = value + "px";
    }
    set width(value) {
        this.htmlDiv.style.width = value + "px";
    }
    set height(value) {
        this.htmlDiv.style.height = value + "px";
    }
    set zIndex(value) {
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
    moveTo(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        for (const [_, child] of this.children.entries()) {
            child.moveBy(dx, dy);
        }
        this.moveBy(dx, dy);
    }
    moveBy(dx, dy) {
        for (const [_, child] of this.children.entries()) {
            child.moveBy(dx, dy);
        }
        this.x += dx;
        this.y += dy;
    }
    resizeTo(width, height) {
        const dw = width - this.width;
        const dh = height - this.height;
        for (const [_, child] of this.children.entries()) {
            child.resizeBy(dw, dh);
        }
        this.resizeBy(dw, dh);
    }
    resizeBy(dw, dh) {
        for (const [_, child] of this.children.entries()) {
            child.resizeBy(dw, dh);
        }
        this.width += dw;
        this.height += dh;
    }
    scaleBy(fx) {
        for (const [_, child] of this.children.entries()) {
            child.scaleBy(fx);
        }
        this.width *= fx;
        this.height *= fx;
    }
    /**
     * @param dz The change in z-index
     */
    dzBy(dz) {
        for (const [_, child] of this.children.entries()) {
            child.dzBy(dz);
        }
        this.zIndex += dz;
    }
    /**
     * @param entity The entity to add as a child
     * @returns The id of the entity added
     */
    addChild(entity) {
        entity.id = Object.keys(this.children).length;
        entity.parent = this;
        this.children.set(entity.id, entity);
        return entity.id;
    }
    /**
     * @param id The id of the entity to remove
     */
    removeChild(id) {
        var _a;
        (_a = this.children.get(id)) === null || _a === void 0 ? void 0 : _a.remove();
        this.children.delete(id);
    }
    /**
     * Removes the entity from its parent.
     */
    removeFromParent() {
        if (!this.parent)
            return;
        if (isNaN(this.id))
            return;
        this.parent.removeChild(this.id);
    }
}
export default Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjcmlwdHMvZW50aXRpZXMvRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsTUFBTSxNQUFNO0lBT1Y7Ozs7O09BS0c7SUFDSCxZQUNFLElBQWEsRUFDYixDQUFVLEVBQ1YsQ0FBVSxFQUNWLEtBQWMsRUFDZCxNQUFlO1FBaEJQLFNBQUksR0FBa0IsSUFBSSxDQUFDO1FBa0JuQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUV6QyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDOUQsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUss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