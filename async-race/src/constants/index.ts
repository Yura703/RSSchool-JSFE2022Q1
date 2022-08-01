//сделать константы для кодов респонса

export const constants = {
  base: 'http://localhost:3000',
  url: ['garage', 'engine', 'winners'],
};

export enum EngineStatus {
  'started',
  'stopped',
  'drive',
}

export interface EngineResponse {
  velocity: number;
  distance: number;
  success: boolean;
}
