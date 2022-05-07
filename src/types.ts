
/* MAIN */

type Build = {
  initialOptions: {
    jsxFactory?: string,
    jsxFragment?: string
  },
  onLoad ( options: LoadOptions, callback: ( args: LoadCallbackArguments ) => LoadCallbackResult | Promise<LoadCallbackResult> ): void
};

type LoadOptions = {
  filter: RegExp
};

type LoadCallbackArguments = {
  path: string
};

type LoadCallbackResultContents = string | Uint8Array;

type LoadCallbackResultLoader = 'js' | 'jsx' | 'ts' | 'tsx';

type LoadCallbackResult = {
  contents: LoadCallbackResultContents,
  loader: LoadCallbackResultLoader
};

/* EXPORT */

export type {Build, LoadCallbackResultLoader};
