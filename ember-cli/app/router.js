import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {
    path: 'user/:user_id'
  }, function() {
    this.route('edit');
  });
  this.route('register');
  this.route('login');
});

export default Router;
