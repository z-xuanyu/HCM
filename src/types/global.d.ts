export interface IElectronAPI {
    platform: string;
    setTitle: (title: string) => void;
  }
  
  declare global {
    interface Window {
      electronAPI: IElectronAPI;
    }
  }