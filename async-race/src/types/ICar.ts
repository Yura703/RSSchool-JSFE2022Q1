export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface ICarQueryParams {
  page: number;
  limit: number;
}

//Code: 200 OK
// Headers?: "X-Total-Count": "4"
//type Color = 'red' | 'green' | 'blue'; //сделать регулярку для цвета
