export type TRequestMethodTypes = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IRequest<B, P> {
  body?: B;
  params?: P;
  urlEndpoint?: string;
  method: TRequestMethodTypes;
}
