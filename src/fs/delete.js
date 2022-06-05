import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { stat, rm } from 'fs/promises';

export const remove = async () => {
  console.log(`\n4. Run: ${fileURLToPath(import.meta.url)}`);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const fileName = resolve(__dirname, "files", "fileToRemove.txt");

  try {
    console.log(`\x1b[33mDeleting file: \x1b[0m${fileName}`);
    if ((await stat(fileName)).isFile()) {
      await rm(fileName);
      console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
    }
    else {
      throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m");
    }
  }
  catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m");
    }
    else {
      throw error;
    }
  }
};