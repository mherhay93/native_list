import axios from 'axios';
import type { IRequest } from '../types/axios';
import { BASE_URL } from './constants';

export const request = <B, P>({
  body,
  method,
  params,
  urlEndpoint,
}: IRequest<B, P>) => {
  const requestBody =
    body && method !== 'GET' ? JSON.stringify(body) : undefined;
  const requestEndpoint = urlEndpoint ? `${BASE_URL}/${urlEndpoint}` : '';

  const options = {
    params,
    method: method,
    body: requestBody,
    url: `${BASE_URL}/${requestEndpoint}`,
    headers: { 'content-type': 'application/json' },
  };
  return axios(options);
};
