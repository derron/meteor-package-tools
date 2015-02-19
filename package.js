Package.describe({
  name: 'ethereum:tools',
  summary: 'Helper functions for dapps',
  version: '0.0.7',
  git: 'http://github.com/ethereum/meteor-package-tools'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('3stack:bignumber@2.0.0', 'client');

  api.export('EthTools', 'client');

  api.addFiles('ethtools.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ethereum:tools');
  api.addFiles('ethtools-tests.js', 'client');
});
