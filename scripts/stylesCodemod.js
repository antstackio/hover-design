const glob = require("glob");
const fs = require("fs");
const path = require("path");

const coreFolder = "../packages/core/src";
const reactComponentFolder = "../packages/react/src/components";
const coreComponentFolder = "../packages/core/src/components";

const cssFilePattern = "**/*.{styles.css.ts,global.styles.css.ts}";
const filesToMove = glob.sync(cssFilePattern, {
  cwd: reactComponentFolder,
  nodir: true
});

// Object to keep track of the exported files for each directory
const exportedFiles = {};

// Move files and keep track of exported files
filesToMove.forEach((file) => {
  const sourceFilePath = path.join(reactComponentFolder, file);
  const targetFilePath = path.join(coreComponentFolder, file);
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

// Create top-level index file for core folder
const coreIndexPath = path.join(coreFolder, "index.ts");
const subdirectories = fs
  .readdirSync(coreComponentFolder, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const directoryExports = subdirectories
  .map((dir) => `export * from './${dir}';`)
  .join("\n");

fs.writeFileSync(coreIndexPath, directoryExports, { encoding: "utf8" });
