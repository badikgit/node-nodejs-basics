/* File system (src/fs) */
import { create } from './src/fs/create.js';
import { copy } from './src/fs/copy.js';
import { rename } from './src/fs/rename.js';
import { remove } from './src/fs/delete.js';
import { list } from './src/fs/list.js';
import { read } from './src/fs/read.js';
/* Command line interface(src/cli) */
import { parseEnv } from './src/cli/env.js';
import { parseArgs } from './src/cli/args.js';
import { fork } from "child_process";
/* Modules(src/modules) */

/* Hash (src/hash) */
import { calculateHash } from './src/hash/calcHash.js';
/* Streams (src/streams) */
import { read as readStream } from './src/streams/read.js';
import { write as writeStream } from './src/streams/write.js';
import { transform as transformStream } from './src/streams/transform.js';
/* Zlib (src/zip) */
import { compress } from './src/zip/compress.js';
import { decompress } from './src/zip/decompress.js';
/* Worker Threads (src/wt) */
import { performCalculations } from './src/wt/main.js';
import { sendResult } from './src/wt/worker.js';
/* Child Processes (src/cp) */
import { spawnChildProcess } from './src/cp/cp.js';
import cluster from 'cluster';

/* File system (src/fs) */
{
  console.group('\n\x1b[7m\x1b[33m Start tests \x1b[0m');
  {
    console.group('\n\x1b[46m\x1b[30m File system (src/fs): \x1b[0m')
    try {
      //await create();
    } catch (error) {
      console.log(error);
    }
    try {
      //await copy();
    } catch (error) {
      console.log(error);
    }
    try {
      //await rename();
    } catch (error) {
      console.log(error);
    }
    try {
      //await remove();
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

  /* Hash (src/hash) */
  {
    console.group('\n\x1b[46m\x1b[30m Hash (src/hash): \x1b[0m')
    try {
      await calculateHash();
    } catch (error) {
      console.log(error);
    }
    console.groupEnd();
  }

  /* Streams (src/streams) */
  {
    console.group('\n\x1b[46m\x1b[30m Streams (src/streams): \x1b[0m')
    try {
      //await readStream();
    } catch (error) {
      console.log(error);
    }
    try {
      //await writeStream();
    } catch (error) {
      console.log(error);
    }
    try {
      //await transformStream();
    } catch (error) {
      console.log(error);
    }
    console.groupEnd();
  }

  /* Zlib (src/zip) */
  {
    console.group('\n\x1b[46m\x1b[30m Zlib (src/zip): \x1b[0m')
    try {
      //await compress();
    } catch (error) {
      console.log(error);
    }
    try {
      //await decompress();
    } catch (error) {
      console.log(error);
    }
    console.groupEnd();
  }

  /* Worker Threads (src/wt) */
  {
    console.group('\n\x1b[46m\x1b[30m Worker Threads (src/wt): \x1b[0m')
    try {
      //await performCalculations();
    } catch (error) {
      console.log(error);
    }
    try {
      //await sendResult();
    } catch (error) {
      console.log(error);
    }
    console.groupEnd();
  }

  /* Child Processes (src/cp) */
  {
    console.group('\n\x1b[46m\x1b[30m Child Processes (src/cp): \x1b[0m')
    try {
      //await spawnChildProcess();
    } catch (error) {
      console.log(error);
    }
    console.groupEnd();
  }

  console.groupEnd();
  console.log('\n\x1b[7m\x1b[32m Tests over \x1b[0m');
}

/* Modules(src/modules) */
{
  console.group('\n\x1b[46m\x1b[30m Modules(src/modules): \x1b[0m');
  try {
    console.log('Для проверки задания набрать: npm run modules.test');
  } catch (error) {
    console.log(error);
  }
  console.groupEnd();
}

/* Command line interface(src/cli) */
{
  console.group('\n\x1b[46m\x1b[30m Command line interface(src/cli): \x1b[0m');
  try {
    fork("env.js", { cwd: 'src/cli/', env: { RSS_name1: 'value1', RSS_name2: 'value2' } });
  } catch (error) {
    console.log(error);
  }
  try {
    fork("args.js", ["--propName", "value", "--prop2Name", "value2"], { cwd: 'src/cli/' });
  } catch (error) {
    console.log(error);
  }
}