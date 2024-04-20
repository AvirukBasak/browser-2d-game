/**
 * JOBS
 * get CWD from __dirname
 * run `tsc --watch` in CWD/../
 * if tsc fails, exit with error code
 * check if CWD/../dist-dev exists, if not create it
 * copy all CWD/../src recursively to CWD/../dist that do not end in .ts
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const { copyAll } = require("./util");

const CWD = __dirname;
const SRC = path.join(CWD, "..", "src");
const DIST = path.join(CWD, "..", "dist-dev");

const TSC = "tsc --outDir " + DIST;
console.log("> RUN ", TSC);
try {
  execSync(TSC, { stdio: "inherit", cwd: path.join(CWD, "..") });
} catch (error) {
  console.error(error);
  process.exit(error.status);
}

if (!fs.existsSync(DIST)) {
  fs.mkdirSync(DIST, { recursive: true });
}

if (!fs.lstatSync(DIST).isDirectory()) {
  console.error(`'${DIST}' is not a directory`);
  process.exit(1);
}

copyAll(SRC, DIST);
