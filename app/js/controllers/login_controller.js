Batch.LoginController = Ember.Controller.extend({
  needs:['application'],
  currentUser:null,


  actions: {
    signUp: function () {
      console.log(this);
      var self = this;
      Batch.ref.createUser({
        email:this.get('signUpEmail'),
        password:this.get('signUpPassword')
      }, function(error) {
        if (error === null) {
          console.log('Successfully created user');


          //This will log the user in on the success of the create user function.
          //This enables us to grab the authData value from the authWithPassword function.
          //We use the authData.uid to create the user in the data structure in firebase
          //outside of the 'login & auth' section of firebase.
          //This is all to have access to the current user and storing data under the users.


          Batch.ref.authWithPassword({
            email : self.get('signUpEmail'),
            password : self.get('signUpPassword')
          },function (error, authData) {

            if (error === null) {
              var users = self.store.createRecord('user', {
                userID: authData.uid,
                email:self.get('signUpEmail')
              })
              self.set('controllers.application.currentUser', {
                userid:authData.uid
              })
              users.save();
              console.log('Logged In. Current ID: ' + authData.uid + ' Provider:' + authData.provider);
            } else {
              console.log('Error logging in:' + error);
            }
          })
        } else {
          console.log('Error creating user:' + error);
        }
      })
    },


    logIn: function () {
      Batch.ref.authWithPassword({
        email:this.get('sign-in-email'),
        password:this.get('sign-in-password')
      },function (error, authData) {
        if (error === null) {
          console.log('Logged In. Current ID: ' + authData.uid + ' Provider:' + authData.provider);
        } else {
          console.log('Error logging in:' + error);
        }
      })
    }
  }
})
