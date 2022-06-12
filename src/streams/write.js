import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { WriteStream } from 'fs';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = resolve(__dirname, "files", "fileToWrite.txt");
  const writeStream = WriteStream(filePath);
  const readlineStream = readline.createInterface({ input, output });

  console.log(`\x1b[33mWriting to file: \x1b[0m${filePath}\n`);
  readlineStream.on('line', input => writeStream.write(`${input}\n`));

  readlineStream.on('SIGINT', () => readlineStream.close());

  readlineStream.on('close', () => {
    writeStream.close();
    console.log("\n\x1b[32m\x1b[7m Completed \x1b[0m");
  });

  readlineStream.on('error', (error) => { throw error });
  writeStream.on('error', (error) => { throw error });
};

write();