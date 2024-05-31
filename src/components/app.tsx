import { useEffect } from 'react';
import { VITE_API_URL } from '../const';

export const App = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((res) => res?.text())
      .then(console.log);

    const replaceText = (selector: string, text: string) => {
      const element = document.getElementById(selector);
      if (element) element.innerText = text;
    };

    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, window?.process?.versions[dependency]);
    }
  }, []);

  return (
    <div>
      <h1 className="bg-red-500 text-xl">React APP</h1>
      <p>Welcome to your Electron application.</p>
      We are using Node.js <span id="node-version"></span>, Chromium <span id="chrome-version"></span>, and Electron{' '}
      <span id="electron-version"></span>.
    </div>
  );
};
