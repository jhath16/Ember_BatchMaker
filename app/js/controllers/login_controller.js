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
      var self = this;
      Batch.ref.authWithPassword({
        email:this.get('sign-in-email'),
        password:this.get('sign-in-password')
      },function (error, authData) {
        if (error === null) {
          console.log(authData.uid);
          var users = self.store.createRecord('user', {
            userID: authData.uid,
            email:self.get('sign-in-email')
          })
          console.log(users.userID);
          users.save();
          console.log('Logged In. Current ID: ' + authData.uid + ' Provider:' + authData.provider);
        } else {
          console.log('Error logging in:' + error);
        }
      })
    }
  }
})
