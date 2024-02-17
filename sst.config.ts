import { SSTConfig } from 'sst';
import { Services } from '#/stacks/services';
import { isLocal } from '#/is-local';

export default {
  config(input) {
    return {
      name: 'outrage-service',
      region: 'us-east-1',
      profile: isLocal(input.stage) ? 'SSTLocal' : undefined
    };
  },
  stacks(app) {
    isLocal(app.stage) && app.setDefaultRemovalPolicy('destroy');

    app.setDefaultFunctionProps({
      architecture: 'arm_64',
      environment: {
        NODE_OPTIONS: '--enable-source-maps'
      },
      nodejs: {
        sourcemap: true
      }
    });

    app.addDefaultFunctionEnv({
      DATABASE_CONNECTION_URL: process.env['DATABASE_CONNECTION_URL']!
    });

    app.stack(Services);
  }
} satisfies SSTConfig;
