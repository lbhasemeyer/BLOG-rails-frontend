import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deletePost: function(id) {
      var post = this.store.find('post', id).then(function(post) {
      post.deleteRecord();
      post.save()
    });
  }
}
});
