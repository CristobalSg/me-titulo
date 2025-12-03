const fs = require("fs");
const path = require("path");

const defaultDriveUrl = "https://drive.google.com/drive/folders/1FWDZA78FPZVRZolvux8Z_t_xmvO8UB0A?usp=sharing";
const defaultVideoUrl = "https://drive.google.com/file/d/1rqu-F2dmNcc4Ff8Y2E62MB7OQM-Lx54j/preview";

const driveUrl = process.env.DRIVE_URL || defaultDriveUrl;
const videoUrl = process.env.VIDEO_URL || defaultVideoUrl;

const output = [
  `window.DRIVE_URL = ${JSON.stringify(driveUrl)};`,
  `window.VIDEO_URL = ${JSON.stringify(videoUrl)};`,
  "",
].join("\n");
const targetPath = path.join(__dirname, "config.js");

fs.writeFileSync(targetPath, output);
const driveSource = process.env.DRIVE_URL ? "DRIVE_URL env var" : "default DRIVE URL";
const videoSource = process.env.VIDEO_URL ? "VIDEO_URL env var" : "default VIDEO URL";
console.log(`config.js generated (${driveSource}, ${videoSource})`);
