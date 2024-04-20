/**
 * JOBS
 * get CWD from __dirname
 * if args == "dev", set DIST = "dist-dev"
 * else set DIST = "dist"
 * serve files in DIST at localhost:3000
 * serve using node-static
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const express = require("express");

const app = express();

const cwd = __dirname;
const args = process.argv.slice(2);

let dist = "dist";

if (args[0] === "dev") {
  dist = "dist-dev";
}

if (!fs.existsSync(path.join(cwd, '..', dist))) {
  console.log(`Error: ${dist} does not exist`);
  process.exit(1);
}

app.use('/', express.static(path.join(cwd, '..', dist)));
app.listen(3000, () => {
  console.log(`> http://localhost:3000`);
});
