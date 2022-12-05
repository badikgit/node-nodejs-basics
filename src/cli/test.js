/* Command line interface(src/cli) */
import { fork } from "child_process";

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