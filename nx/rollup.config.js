const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  return {
      ...nxConfig,
    output: {
      ...nxConfig.output,
      exports: 'named',
      preserveModules: true,
    }
  };
};
