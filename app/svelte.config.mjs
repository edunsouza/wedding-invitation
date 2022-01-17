import preprocess from 'svelte-preprocess';

const preprocessOptions = {
  sourceMap: true,
  defaults: {
    style: "scss",
  },
  scss: {
    prependData: `@import './src/styles/variables.scss';`,
  },
};

export default {
  preprocess: preprocess(preprocessOptions),
  preprocessOptions,
};