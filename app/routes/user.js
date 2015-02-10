import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model) {
    model.reload().then(function() {
      controller.set('model', model);
    });
  }
});
