import { ApiHandler, usePathParam } from 'sst/node/api';
import connect from '@faruuko/outrage-orm/connect';
import getPostById from '@faruuko/outrage-orm/prepared-statements/post/get-post-by-id';

const { connection } = connect({
  connectionString:
    'postgresql://thepharoouq:WxpPOKL3Az6h@ep-curly-sun-a5nlcd9t-pooler.us-east-2.aws.neon.tech/outrage?sslmode=require'
});

export const handler = ApiHandler(async () => {
  const id = usePathParam('id');

  const result = await getPostById(connection).execute({ id });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: {
      'Content-Type': 'application/json'
    }
  };
});
