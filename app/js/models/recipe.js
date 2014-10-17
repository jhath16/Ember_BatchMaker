Batch.Recipe = DS.Model.extend({
  user:DS.attr('string'),
  name:DS.attr('string'),
  author:DS.attr('string'),
  public:DS.attr('boolean'),
  type:DS.attr('string'),
  prepTime:DS.attr('string'),
  cookTime:DS.attr('number'),
  cookTemp:DS.attr('string'),
  tempUnit:DS.attr('string'),
  amount:DS.attr('number'),
  productName:DS.attr('string'),
})
