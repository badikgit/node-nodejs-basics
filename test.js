import { create } from './src/fs/create.js';
import { copy } from './src/fs/copy.js';
import { rename } from './src/fs/rename.js';
import { remove } from './src/fs/delete.js';
import { list } from './src/fs/list.js';
import { read } from './src/fs/read.js';
import { parseEnv } from './src/cli/env.js';
import { parseArgs } from './src/cli/args.js';


{
  console.group('\n\x1b[7m\x1b[33m Start tests \x1b[0m');
  {
    console.group('\n\x1b[46m\x1b[30m File system (src/fs): \x1b[0m')
    try {
      await create();
    } catch (error) {
      console.log(error);
    }
    try {
      await copy();
    } catch (error) {
      console.log(error);
    }
    try {
      await rename();
    } catch (error) {
      console.log(error);
    }
    try {
      await remove();
    } catch (error) {
      console.log(error);
    }
    try {
      await list();
    } catch (error) {
      console.log(error);
    }
    try {
      await read();
    } catch (error) {
      console.log(error);
    }
    console.groupEnd();
  }
  /*
  {
    console.group('\n\x1b[46m\x1b[30m Command line interface(src/cli): \x1b[0m')
    await parseEnv();
    await parseArgs();
    console.groupEnd();
  }
  {
    console.group('\n\x1b[46m\x1b[30m Modules(src/modules): \x1b[0m')
    await parseEnv();
    console.groupEnd();
  }
  {
    console.group('\n\x1b[46m\x1b[30m Hash (src/hash): \x1b[0m')
    await parseEnv();
    console.groupEnd();
  }
  {
    console.group('\n\x1b[46m\x1b[30m Streams (src/streams): \x1b[0m')
    await parseEnv();
    console.groupEnd();
  }
  {
    console.group('\n\x1b[46m\x1b[30m Zlib (src/zip): \x1b[0m')
    await parseEnv();
    console.groupEnd();
  }
  {
    console.group('\n\x1b[46m\x1b[30m Worker Threads (src/wt): \x1b[0m')
    await parseEnv();
    console.groupEnd();
  }
  {
    console.group('\n\x1b[46m\x1b[30m Child Processes (src/cp): \x1b[0m')
    await parseEnv();
    console.groupEnd();
  }
  */
  console.groupEnd();
  console.log('\n\x1b[7m\x1b[32m Tests over \x1b[0m');
} 