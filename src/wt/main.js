import { Worker } from 'worker_threads';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { rejects } from 'assert';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const workerPath = resolve(__dirname, 'worker.js');

  const cp = cpus();
  let number = 10;

  const workersResults = await Promise.allSettled( cp.map( () => {
    return new Promise((res, rej) => {
      const worker = new Worker(workerPath, { workerData: number++ });
      worker.on('error', error => rej(error));
      worker.on('message', message => res(message));
    });
  }))
  const results = workersResults.map(({status, value}) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null
  }));

  console.log(results);
  return results;
};

performCalculations();