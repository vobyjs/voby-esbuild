## Voby Esbuild

The official Voby plugin for [Esbuild](https://esbuild.github.io).

## Usage

```ts
import esbuild from 'esbuild';
import voby from 'voby-esbuild';

esbuild.build ({
  entryPoints: ['src.js'],
  outfile: 'dist.js',
  plugins: [voby ()]
});
```

## License

MIT © Fabio Spampinato
