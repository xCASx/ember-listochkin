import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNewTrack: function(track) {
      //console.log(track);
      this.store.createRecord('track', track).save.then(function() {
        this.transitionTo('trackList');
      }.bind(this));
    }
  }
});
