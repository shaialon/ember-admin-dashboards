import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('widgets');
  this.route('editor', {path:'/'});
  this.route('twitter');
  this.route('general-ui');
});

export default Router;
