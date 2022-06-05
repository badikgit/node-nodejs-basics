import { fileURLToPath } from 'url'
import { argv } from "process";

export const parseArgs = () => {
  console.log(`\n2. Run: ${fileURLToPath(import.meta.url)}`);
  console.log(`\x1b[33mParsing argv:\x1b[0m ${argv}`);
  console.log('Result:' + ' ' + argv
      .filter((item, index) => index > 1)
      .map((item, index) => index%2 ? `is ${item},` : item.slice(2))
      .join(' ')
      .slice(0,-1));
  console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
};

parseArgs();