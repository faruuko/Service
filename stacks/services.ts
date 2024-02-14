import { StackContext, Api as Svc } from 'sst/constructs';

export const Services = ({ stack }: StackContext) => {
  const services = new Svc(stack, 'services', {
    routes: {
      'GET /posts': 'services/post/get-posts.handler',
      'GET /authors': 'services/author/get-authors.handler'
    }
  });

  stack.addOutputs({
    Endpoint: services.url
  });
};
