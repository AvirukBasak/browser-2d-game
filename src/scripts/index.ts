const Canvas =
  document.getElementById("canvas") || document.createElement("div");

Canvas.style.width = "700px";
Canvas.style.height = "600px";

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "red";
div.style.position = "absolute";
div.style.top = "0px";
div.style.left = "0px";
div.style.borderRadius = "50%";

Canvas.appendChild(div);

window.addEventListener(
  "keydown",
  function (event) {
    console.log(event.key + " was pressed");

    // within the bounds of the canvas
    const canvasWidth = Canvas.clientWidth;
    const canvasHeight = Canvas.clientHeight;
    const { left, top } = div.getBoundingClientRect();
    // up arrow
    if (event.key === "ArrowUp") {
      if (top > 0) div.style.top = parseInt(div.style.top) - 10 + "px";
    }
    // down arrow
    if (event.key === "ArrowDown") {
      if (top < canvasHeight)
        div.style.top = parseInt(div.style.top) + 10 + "px";
    }
    // left arrow
    if (event.key === "ArrowLeft") {
      if (left > 0) div.style.left = parseInt(div.style.left) - 10 + "px";
    }
    // right arrow
    if (event.key === "ArrowRight") {
      if (left < canvasWidth)
        div.style.left = parseInt(div.style.left) + 10 + "px";
    }

    // spacebar
    if (event.key === " ") {
      const currentColor = div.style.backgroundColor;
      div.style.backgroundColor = currentColor === "red" ? "blue" : "red";
    }
  },
  true
);
