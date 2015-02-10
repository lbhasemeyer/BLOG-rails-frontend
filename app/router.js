import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('search');
  this.resource('posts', function() {
    this.route('new');
    this.resource('post', { path: '/:post_id' }, function() {
      this.route('edit', { path: '/edit' });
    });
  });
  this.route("users");
  this.route("comments");
});

export default Router;
