//сделать константы для кодов респонса

export const constants = {
  base: 'http://localhost:3000',
  url: ['garage', 'engine', 'winners'],
  tableRow: ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'],
  widthAvto: 100,
  OK: 200,
  limit: 7,
  limitTable: 10,
  width: 50,
  notFound: -1,
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
