
/* IMPORT */

import fs from 'node:fs/promises';
import path from 'node:path';
import type {Build, LoadCallbackResultLoader} from './types';

/* MAIN */

const esbuild = () => {

  const jsxInject = `import {createElement as $$c, Fragment as $$F} from 'voby';\n`;
  const jsxFactory = '$$c';
  const jsxFragment = '$$F';

  return {
    name: 'voby',
    setup: ( build: Build ): void => {

      build.initialOptions.jsxFactory = jsxFactory;
      build.initialOptions.jsxFragment = jsxFragment;
      build.initialOptions.banner = { js: '"use strict";' };

      build.onLoad ( { filter: /\.[jt]sx$/ }, async args => {

        const contentsRaw = await fs.readFile ( args.path, 'utf8' );
        const contents = `${jsxInject}${contentsRaw}`;
        const loader = path.extname ( args.path ).slice ( 1 ) as LoadCallbackResultLoader;

        return { contents, loader };

      });

    }
  };

};

/* EXPORT */

export default esbuild;
