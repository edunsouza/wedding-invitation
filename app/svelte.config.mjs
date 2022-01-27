import preprocess from 'svelte-preprocess';

const preprocessOptions = {
  sourceMap: true,
  scss: {
    prependData: `@import './src/styles/variables.scss';`,
  },
};

export default {
  preprocess: preprocess(preprocessOptions),
  preprocessOptions,
};