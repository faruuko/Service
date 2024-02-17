import { ApiHandler, useJsonBody } from 'sst/node/api';
import connect from '@faruuko/outrage-orm/connect';
import createPost from '@faruuko/outrage-orm/operations/post/create-post';

const { connection } = connect({
  connectionString:
    'postgresql://thepharoouq:WxpPOKL3Az6h@ep-curly-sun-a5nlcd9t-pooler.us-east-2.aws.neon.tech/outrage?sslmode=require'
});

export const handler = ApiHandler(async () => {
  const body = useJsonBody();

  const result = await createPost(connection, { id: '1', ...body });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: {
      'Content-Type': 'application/json'
    }
  };
});
