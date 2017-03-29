import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    clickAdmin: function() {
      this.set('isAdmin', true);
      console.log('admin selected');
    },
  },
});
