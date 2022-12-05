import { stdin as input, stdout as output } from 'process';
import { Transform, pipeline } from 'stream';
import { EOL } from 'os';

export const transform = async () => {
  console.log(`\x1b[33mReverse input:\x1b[0m`);
  const transformStream = new Transform ({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString()
                          .replace(EOL, '')
                          .split('')
                          .reverse()
                          .join('')
                          + EOL);
    }
  });
  pipeline (input,
            transformStream,
            output,
            error => { throw error; });
}

transform();