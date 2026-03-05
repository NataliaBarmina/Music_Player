import createClient from 'openapi-fetch';
import type { paths } from './api/schema';

export const client = createClient<paths>({
  baseUrl: 'https://musicfun.it-incubator.app/api/1.0/',
  headers: { 'api-key': '18cd6698-746e-4cf8-bbb7-c3488d7205ad' },
});
