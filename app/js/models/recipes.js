Batch.User = Ember.Model.extend({
  Recipes: DS.hasMany('recipe');
})

Batch.Recipe = Ember.Model.extend({
  Ingredients: DS.hasMany('ingredient');
})
