import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['term'],
  term: null,

  actions: {

    doSearch: function() {
      var input = this.get('term');

      this.store.find('post', {find: input}).then(function () {
        this.set('model', posts);
      }.bind(this));
    }

  }

});
