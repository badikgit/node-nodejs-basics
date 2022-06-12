import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToFile = resolve(__dirname, "files", "fileToCalculateHashFor.txt");

  try {
    console.log(`\x1b[33mCalculating hash of file \x1b[0m${pathToFile}`);
    const data = await readFile(pathToFile, { encoding: 'utf8' });
    const hash = createHash('sha256').update(data).digest('hex');
    //console.log(`Hash: ${hash}\n\x1b[32m\x1b[7m Completed \x1b[0m`);
    return hash;
  } catch (error) {
    throw error;
  }
};