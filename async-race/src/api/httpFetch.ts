import { ICarCreate } from '../types/ICar';

export async function httpFetch<T>(request: string, body?: ICarCreate): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request, body);

  response.parsedBody = (await response.json()) as T[] | T;
  const totalCount = response.headers.get('X-Total-Count');
  if (totalCount) response.count = +totalCount;

  return response;
}

export interface HttpResponse<T> extends Response {
  parsedBody?: T[] | T;
  status: number;
  count?: number;
}
