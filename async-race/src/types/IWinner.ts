export interface IWinner {
  id: number;
  wins: number;
  time: number; //Time?  2.12
}

export interface IWinnerQueryParams {
  page: number;
  limit: number;
  sort: string;
  order: string;
}

export interface IWinnerResponse {
  items?: IWinner[];
  count?: number;
}

export enum Order {
  'ASC',
  'DESC',
}
export enum Sort {
  'id',
  'wins',
  'time',
}
