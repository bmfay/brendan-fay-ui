import DS from 'ember-data';

const {
  attr,
  belongsTo,
} = DS;

export default DS.Model.extend({
  beginTime: attr('number'),
  cloudinaryId: attr('string'),
  pageNumber: attr('number'),
  originalWidth: attr('number'),
  originalHeight: attr('number'),

  score: belongsTo('score')
});
