import zlib from 'zlib';
import { createReadStream, createWriteStream} from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const srcPath = resolve(__dirname,'files','fileToCompress.txt');
  const destPath = resolve(__dirname,'files','archive.gz');
  console.log(`\x1b[33mCompressing file: \x1b[0m${srcPath}\n\t      to: ${destPath}`);
  const gzip = zlib.createGzip();
  const readStream = createReadStream(srcPath);
  const writeStream = createWriteStream(destPath);
  pipeline(readStream,
           gzip,
           writeStream,
           error => {
             if (error) throw error;
             console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
           });

};

compress();