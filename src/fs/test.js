/* File system (src/fs) */
import { create } from './create.js';
import { copy } from './copy.js';
import { rename } from './rename.js';
import { remove } from './delete.js';
import { list } from './list.js';
import { read } from './read.js';

/* File system (src/fs) */
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
}