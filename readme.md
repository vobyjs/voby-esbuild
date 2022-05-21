# Voby Esbuild

The official Voby plugin for [Esbuild](https://esbuild.github.io).

## Install

```sh
npm install --save voby-esbuild
```

## Usage

```ts
import esbuild from 'esbuild';
import voby from 'voby-esbuild';

esbuild.build ({
  bundle: true,
  minify: true,
  format: 'esm',
  platform: 'node',
  target: 'es2018',
  entryPoints: ['src.js'],
  outfile: 'dist.js',
  plugins: [
    voby ()
  ]
});
```

## License

MIT © Fabio Spampinato
