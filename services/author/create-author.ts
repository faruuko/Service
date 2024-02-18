import { ApiHandler, useJsonBody } from 'sst/node/api';
import connect from '@faruuko/outrage-orm/connect';
import createAuthor from '@faruuko/outrage-orm/operations/author/create-author';

const { connection } = connect({
  connectionString: process.env['DATABASE_CONNECTION_URL']
});

export const handler = ApiHandler(async () => {
  const body = useJsonBody();

  const result = await createAuthor(connection, { id: '1', ...body });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: {
      'Content-Type': 'application/json'
    }
  };
});
