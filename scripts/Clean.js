/**
 * JOBS
 * get CWD from __dirname
 * remove "dist" and "dist-dev" directories
 */

const fs = require("fs");
const path = require("path");

const cwd = __dirname;

["dist", "dist-dev"].forEach((dir) => {
  if (fs.existsSync(path.join(cwd, '..', dir))) {
    fs.rmSync(path.join(cwd, '..', dir), { recursive: true });
  }
});
