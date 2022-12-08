import { ICar } from './ICar';

export class Car implements ICar {
  color: string;

  name: string;

  speed: number;

  id: number;

  constructor(name: string, color: string, speed?: number, id?: number) {
    this.name = name;
    this.color = color;
    this.speed = speed ?? 0;
    this.id = id ?? 0;
  }
}
