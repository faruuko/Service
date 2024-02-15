import { ApiHandler } from 'sst/node/api';

export const handler = ApiHandler(async () => {
  return { statusCode: 200, body: 'This request is made from get-authors.ts' };
});
