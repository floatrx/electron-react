declare global {
  interface Window {
    process: {
      versions: NodeJS.Process;
      env: NodeJS.ProcessEnv;
    };
  }
  interface ImportMeta {
    env: Record<string, string>;
  }
}

export {};
