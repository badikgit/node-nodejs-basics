import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { createReadStream } from 'fs';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = resolve(__dirname, "files","fileToRead.txt");
  
  const stream = createReadStream(filePath, "utf-8");

  stream.on('data', data => {
    console.log(`\x1b[33mReading file: \x1b[0m${filePath}`);
    process.stdout.write(data);
  });
  stream.on('end', () => console.log("\n\x1b[32m\x1b[7m Completed \x1b[0m"));
  stream.on('error', (error) => { throw error });
};

read();