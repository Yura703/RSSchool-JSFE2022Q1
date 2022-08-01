export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface ICarQueryParams {
  page: number;
  limit: number;
}

export interface IEngineResponse {
  velocity: number;
  distance: number;
}

export interface ICarResponse {
  items?: ICar[] | ICar;
  count?: number;
}

export interface ICarCreate {
  method: string; //                      !'POST'   сделать
  body?: string;
  headers?: {
    'Content-Type': string;
  };
}

//Code: 200 OK
// Headers?: "X-Total-Count": "4"
//type Color = 'red' | 'green' | 'blue'; //сделать регулярку для цвета
