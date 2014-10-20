Batch.RecipesCreateController = Ember.Controller.extend({
needs:['application'],
recipeType:['Breakfast', 'Lunch','Dinner','Dessert'],
cookUnit:['°Fahrenheit','°Celsius'],
ingredientUnit:['Cups','Ounces'],

actions: {
  addRecipe: function () {
    var recipes = this.store.createRecord('recipe',  {
      user:this.get('controllers.application.currentUser'),
      name:this.get('name'),
      author:this.get('author'),
      public:this.get('isPublic'),
      type:this.get('selectedRecipeType'),
      prepTime:this.get('prepTime'),
      cookTime:this.get('cookTime'),
      cookTemp:this.get('cookTemp'),
      tempUnit:this.get('selectedTempUnit'),
      amount:this.get('amount'),
      productName:this.get('productName')
      });
      recipes.save();
    }

    
  }
})
