Batch.LoginController = Ember.Controller.extend({
  needs:['application'],

  actions: {
    signUp: function () {
      Batch.ref.createUser({
        email:this.get('signUpEmail'),
        password:this.get('signUpPassword')
      }, function(error) {
        if (error === null) {
          console.log('Successfully created user');
        } else {
          console.log('Error creating user:' + error);
        }
      })
    },

    logIn: function () {
      Batch.ref.authWithPassword({
        email:this.get('sign-in-email'),
        password:this.get('sign-in-password')
      })
    }
  }
})
