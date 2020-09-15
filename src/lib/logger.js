module.exports = () => {
  const { Signale } = require('signale');
  const options = {
    disabled: false,
    interactive: false,
    logLevel: 'info',
    scope: 'global',
    // secrets: Object.values(secrets),
    types: {},
  };
  return new Signale(options);
};