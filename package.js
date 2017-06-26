Package.describe({
  name: 'monolith',
  version: '0.0.1',
  // Brief, one-line summary of the package.  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'ecmascript',
        'underscore',
        'templating',
        'session',
        'less',
        'http',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message'
    ]);
    api.addFiles('routes.js'); 
    api.addFiles('reader.js');     
    api.addFiles('monolith.js');
    api.export('renderEmoji');
});
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('monolith');
  api.mainModule('monolith-tests.js');
});

