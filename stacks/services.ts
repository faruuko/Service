import { StackContext, Api as Svc } from 'sst/constructs';

export const Services = ({ stack }: StackContext) => {
  const services = new Svc(stack, 'services', {
    routes: {
      'POST /posts': 'services/post/create-post.handler',
      'PUT /posts/{id}': 'services/post/update-post.handler',
      'GET /posts/{id}': 'services/post/get-post-by-id.handler',
      'POST /authors': 'services/author/create-author.handler'
    }
  });

  stack.addOutputs({
    Endpoint: services.url
  });
};
