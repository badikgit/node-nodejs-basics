//import { fileURLToPath } from 'url'
import { env } from "process";

export const parseEnv = () => {
  //console.log(`\n1. Run: ${fileURLToPath(import.meta.url)}`);
  //console.log("\x1b[33mParsing env.\x1b[0m");
  console.log(/* 'src/cli/env.js Result:' + ' ' +  */Object.entries(env)
      .filter(([key, value]) => key.slice(0, 4) === "RSS_")
      .map(([key, value], index) => [`${key}=${value}`])
      .join('; ')
  );
  //console.log("\x1b[32m\x1b[7m Completed \x1b[0m");
};
parseEnv();
