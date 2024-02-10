import { StackContext, Api as Svc } from 'sst/constructs';

export const Services = ({ stack }: StackContext) => {
  const services = new Svc(stack, 'services', {
    routes: {
      'GET /posts': 'services/posts/get-posts.handler',
      'GET /authors': 'services/authors/get-authors.handler'
    }
  });

  stack.addOutputs({
    Endpoint: services.url
  });
};
