window.Batch = Ember.Application.create();

Batch.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase:new Firebase('https://batchbaker.firebaseio.com/')
});
