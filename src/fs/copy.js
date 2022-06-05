import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path';
import { cp } from 'fs/promises';

export const copy = async () => {
  console.log(`\n2. Run: ${fileURLToPath(import.meta.url)}`);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const srcDirPath = resolve(__dirname,'files');
  const destDirPath = resolve(__dirname,'files_copy');

  try {
    console.info(`\x1b[33mСopy files:\x1b[0m\tfrom ${srcDirPath}\n\t\t  to ${destDirPath}`);
    await cp(srcDirPath, destDirPath, { errorOnExist: true, force: false, recursive: true } );
    console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
  }
  catch (error) {
    if (error) {
      if (error.code === "ERR_FS_CP_EEXIST" || error.code === "ENOENT") {
        throw new Error("\x1b[41m\x1b[37m FS operation failed. \x1b[0m");
      }
      else {
        throw error;
      }
    } 
  }
};