import { ApiHandler, useJsonBody, usePathParam } from 'sst/node/api';
import connect from '@faruuko/outrage-orm/connect';
import updatePost from '@faruuko/outrage-orm/operations/post/update-post';

const { connection } = connect({
  connectionString:
    'postgresql://thepharoouq:WxpPOKL3Az6h@ep-curly-sun-a5nlcd9t-pooler.us-east-2.aws.neon.tech/outrage?sslmode=require'
});

export const handler = ApiHandler(async () => {
  const id = usePathParam('id');
  const body = useJsonBody();

  const result = await updatePost(connection, { id, ...body });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: {
      'Content-Type': 'application/json'
    }
  };
});
