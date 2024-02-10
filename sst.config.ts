import { SSTConfig } from 'sst';
import { Services } from './stacks/services.js';

export default {
  config() {
    return {
      name: 'outrage-service',
      region: 'us-east-1',
      profile: process.env.IS_LOCAL ? 'SSTLocal' : undefined
    };
  },
  stacks(app) {
    process.env.IS_LOCAL && app.setDefaultRemovalPolicy('destroy');

    app.setDefaultFunctionProps({
      architecture: 'arm_64',
      environment: {
        NODE_OPTIONS: '--enable-source-maps'
      },
      nodejs: {
        sourcemap: true
      }
    });

    app.stack(Services);
  }
} satisfies SSTConfig;
