const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('hostApi', {
  request: (args) => ipcRenderer.invoke("request", args),
});