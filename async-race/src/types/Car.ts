import { ICar } from './ICar';

export class Car implements ICar {
  color: string;
  name: string;
  #speed: number = 0;
  #idCar = 0;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  
  public set speed(v : number) {
    this.#speed = v;
  }   

  public get speed() : number {
    return this.#speed;
  }  

  public set id(v : number) {
    this.#idCar = v;
  }   

  public get id() : number {
    return this.#idCar;
  }  
}
