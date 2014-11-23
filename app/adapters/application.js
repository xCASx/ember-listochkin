/* globals fierebase */

import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  firebase: new Firebase(config.firebaseUrl)
});
