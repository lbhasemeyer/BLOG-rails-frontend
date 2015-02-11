import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  // hasMany is plural on left, belongsTo is singular
  // give name of the model - ('singular') - it's what DS expects
  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user')
});
