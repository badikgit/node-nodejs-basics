import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { rename as fsRename, stat } from 'fs/promises';

export const rename = async () => {
  console.log(`\n3. Run: ${fileURLToPath(import.meta.url)}`);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const oldPath = resolve(__dirname, "files", "wrongFilename.txt");
  const newPath = resolve(__dirname, "files", "properFilename.md");

  try {
    console.info(`\x1b[33mRename:\x1b[0m\t   ${oldPath}\n\t\tto ${newPath}`);
    await stat(newPath);
    throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m")
  }
  catch (error) {
    if (error.code === "ENOENT") {
      try {
        if ((await stat(oldPath)).isFile()) {
          await fsRename(oldPath, newPath);
        }
        else {
          throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m");
        }
        console.info("\x1b[32m\x1b[7m Completed \x1b[0m");
      } catch (error) {
        if (error.code === "ENOENT") {
          throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m");
        }
        else {
          throw error;
        }
      }
    } else {
      throw error;
    }
  }
};