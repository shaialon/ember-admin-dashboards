/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'emberdashboard4',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
        'default-src': "'none'",

        'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net *.googleapis.com *.gstatic.com code.ionicframework.com maxcdn.bootstrapcdn.com oss.maxcdn.com *.googleapis.com *.gstatic.com ws://localhost:3000/socket.io/  *.ucarecdn.com *.uploadcare.com *.pusherapp.com ws://ws.pusherapp.com 178.62.214.97 *.ytimg.com https://twitter-stream-embe.herokuapp.com/ wss://twitter-stream-embe.herokuapp.com/",
        'font-src': "'self' data: use.typekit.net code.ionicframework.com maxcdn.bootstrapcdn.com oss.maxcdn.com *.googleapis.com *.gstatic.com ws://localhost:3000/socket.io/ *.ucarecdn.com *.uploadcare.com *.pusherapp.com ws://ws.pusherapp.com 178.62.214.97 *.ytimg.com https://twitter-stream-embe.herokuapp.com/ wss://twitter-stream-embe.herokuapp.com/",
        'connect-src': "'self' localhost:3000 *.googleapis.com *.gstatic.com ws://localhost:3000/socket.io/ *.ucarecdn.com *.uploadcare.com *.pusherapp.com ws://ws.pusherapp.com 178.62.214.97 *.ytimg.com https://twitter-stream-embe.herokuapp.com/ wss://twitter-stream-embe.herokuapp.com/",
        'img-src': "'self' data: www.facebook.com p.typekit.net placehold.it code.ionicframework.com maxcdn.bootstrapcdn.com oss.maxcdn.com *.googleapis.com *.gstatic.com ws://localhost:3000/socket.io/ *.twimg.com *.ucarecdn.com *.uploadcare.com *.pusherapp.com ws://ws.pusherapp.com 178.62.214.97 *.ytimg.com https://twitter-stream-embe.herokuapp.com/ wss://twitter-stream-embe.herokuapp.com/",
        'style-src': "'self' 'unsafe-inline' use.typekit.net placehold.it code.ionicframework.com maxcdn.bootstrapcdn.com oss.maxcdn.com *.googleapis.com *.gstatic.com ws://localhost:3000/socket.io/ *.ucarecdn.com *.uploadcare.com *.pusherapp.com ws://ws.pusherapp.com 178.62.214.97 *.ytimg.com https://twitter-stream-embe.herokuapp.com/ wss://twitter-stream-embe.herokuapp.com/",
        'frame-src': "'self' s-static.ak.facebook.com static.ak.facebook.com www.facebook.com *.ucarecdn.com *.uploadcare.com *.pusherapp.com ws://ws.pusherapp.com 178.62.214.97 *.ytimg.com dl.dropboxusercontent.com https://twitter-stream-embe.herokuapp.com/  wss://twitter-stream-embe.herokuapp.com/ https://www.youtube.com",
      },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
