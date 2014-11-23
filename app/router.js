import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('track/new', {path: 'tracks/new'});
  this.resource('tracklist', {path: 'tracks'}, function() {
    this.resource('track', {path: ':track_id'});
  });
});

export default Router;
