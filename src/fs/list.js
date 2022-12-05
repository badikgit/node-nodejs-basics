import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { readdir, stat } from 'fs/promises';

export const list = async () => {
  console.log(`\n5. Run: ${fileURLToPath(import.meta.url)}`);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const dirPath = resolve(__dirname, "files");

  try {
    console.log(`\x1b[33mCreating array of filenames: \x1b[0m${dirPath}`);
    if ((await stat(dirPath)).isDirectory()) {
      const files = await readdir(dirPath, { withFileTypes: true });
      console.table(files.filter(file => file.isFile()).map(file => file.name));
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m");
    }
    else {
      throw error;
    }
  }
  console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
};