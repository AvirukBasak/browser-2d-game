const fs = require("fs");
const path = require("path");

/**
 * @param {string} src
 * @param {string} dest
 * @returns {void}
 */
function copy(src, dest) {
  if (fs.lstatSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((file) => {
      copy(path.join(src, file), path.join(dest, file));
    });
  } else {
    if (src.endsWith(".ts")) {
      console.log(`> SKIP '${src}'`);
      return;
    }
    console.log(`> COPY '${src}' to '${dest}'`);
    fs.copyFileSync(src, dest);
  }
}

/**
 * @param {string} src
 * @param {string} dest
 * @returns {void}
 */
function copyAll(src, dest) {
  fs.readdirSync(src).forEach((file) => {
    copy(path.join(src, file), path.join(dest, file));
  });
}

module.exports = { copy, copyAll };
