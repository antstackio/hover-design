const glob = require("glob");
const fs = require("fs");
const path = require("path");

const reactFolder = "./react";
const coreFolder = "./core";

const cssFilePattern = "**/*.{styles.css.ts,global.styles.css.ts}";
const filesToMove = glob.sync(cssFilePattern, {
  cwd: reactFolder,
  nodir: true
});

// Object to keep track of the exported files for each directory
const exportedFiles = {};

// Move files and keep track of exported files
filesToMove.forEach((file) => {
  const sourceFilePath = path.join(reactFolder, file);
  const targetFilePath = path.join(coreFolder, file);
  const targetDirPath = path.dirname(targetFilePath);

  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath, { recursive: true });
  }

  try {
    fs.renameSync(sourceFilePath, targetFilePath);
    const dir = path.dirname(targetFilePath);
    const filename = path.basename(targetFilePath);
    exportedFiles[dir] = exportedFiles[dir] || [];
    exportedFiles[dir].push(filename);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.error(`Error: target file '${targetFilePath}' already exists.`);
    } else {
      console.error(
        `Error moving file '${sourceFilePath}' to '${targetFilePath}':`,
        err
      );
    }
  }
});

// Create index files for each directory in core folder
Object.keys(exportedFiles).forEach((dir) => {
  const indexFilePath = path.join(dir, "index.ts");
  const exports = exportedFiles[dir]
    .filter((filename) => filename !== "index.ts")
    .map((filename) => `export * from './${filename.replace(".ts", "")}';`)
    .join("\n");

  if (!fs.existsSync(indexFilePath)) {
    fs.writeFileSync(indexFilePath, exports, { encoding: "utf8" });
  }
});
