import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const scriptPath = resolve(__dirname, 'files', 'script.js');

  const childProcess = fork(scriptPath, args.split(' '));

  childProcess.on('data', data => {
    process.stdout.write(data);
  });
  childProcess.send(process.stdin);
};

spawnChildProcess('--paramName1 name1 --paramName2 name2');