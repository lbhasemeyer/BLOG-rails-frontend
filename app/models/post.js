import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  // give name of the model - ('singular') - it's what DS expects
  // hasMany is plural on left, belongsTo is singular
  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user')
});
