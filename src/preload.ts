// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { contextBridge } from 'electron';
contextBridge.exposeInMainWorld('process', {
  versions: process.versions,
});
