import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  url: null,

  actions: {
    save: function () {
      var track = this.getProperties('title', 'url');
      if(track.title && track.url) {
        this.sendAction('action', track);
      }
    }
  }
});
