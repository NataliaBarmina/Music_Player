import createClient from 'openapi-fetch';
import type { paths } from './schema';

export const client = createClient<paths>({
  baseUrl: 'https://musicfun.it-incubator.app/api/1.0',
  headers: { 'api-key': '1e8608d2-fad2-4eea-8344-f7a8b917b89c' },
});
