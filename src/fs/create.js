import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path';
import { writeFile } from 'fs/promises';

export const create = async () => {
  console.log(`\n1. Run: ${fileURLToPath(import.meta.url)}`);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const fileName = resolve(__dirname, "files", "fresh.txt");
  const textData = 'I am fresh and young';

  try {
    console.log(`\x1b[33mCreating file: \x1b[0m${fileName}`);
    await writeFile(fileName, textData, { flag: "wx" });
    console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
  }
  catch (error) {
    if (error) {
      if (error.code === "EEXIST" ) {
        throw (new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m"));
        //throw new Error("\x1b[41m\x1b[37m FS operation failed \x1b[0m");
      }
      else {
        throw (error);
        //throw error;
      }
    } 
  }
};