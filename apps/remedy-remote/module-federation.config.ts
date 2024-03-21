import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remedy-remote',
  exposes: {
    './Module': 'apps/remedy-remote/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
