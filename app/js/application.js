window.Batch = Ember.Application.create();

Batch.ref = new Firebase('https://batchbaker.firebaseio.com/');

Batch.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase:Batch.ref
});
