import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },

    committeeLookup(params) {
      this.transitionTo('committeeresults', params.committeeChoice);
    }
  }
});
