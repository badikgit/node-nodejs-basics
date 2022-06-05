import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { readFile } from 'fs/promises';

export const read = async () => {
  console.log(`\n6. Run: ${fileURLToPath(import.meta.url)}`);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = resolve(__dirname, "files","fileToRead.txt");
  try {
    console.info(`\x1b[33mReading file: \x1b[0m${filePath}`);
    const data = await readFile(filePath, { encoding : "utf-8" });
    console.log(data);
    console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m");
    }
    else {
      throw error;
    }
  }
};