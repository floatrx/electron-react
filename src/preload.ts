// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { contextBridge } from 'electron';
import 'dotenv/config';
//
contextBridge.exposeInMainWorld('process', {
  versions: process.versions,
  env: process.env,
});

console.log('preload.ts', process.env?.TEST_CONST);
