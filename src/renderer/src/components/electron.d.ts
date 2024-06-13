export {};

declare global {
  interface Window {
    electronAPI: {
      minimizeApp: () => void;
      maximizeApp: () => void;
      closeApp: () => void;
    };
  }
}
