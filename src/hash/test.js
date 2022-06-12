/* Hash (src/hash) */
import { calculateHash } from './calcHash.js';

/* Hash (src/hash) */
{
  console.group('\x1b[46m\x1b[30m Hash (src/hash): \x1b[0m')
  try {
    console.log(`Hash: ${await calculateHash()}\n\x1b[32m\x1b[7m Completed \x1b[0m`);
  } catch (error) {
    console.log(error);
  }
  console.groupEnd();
}