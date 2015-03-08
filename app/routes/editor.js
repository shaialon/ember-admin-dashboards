import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	willTransition: function(transition) {
	      	// if (this.controller.get('userHasEnteredData') && !confirm("Are you sure you want to abandon progress?")) {
      		console.log("WTFFFF");
	      	if ( this.controller.get('isPreviewScene') ) {
	      		transition.abort();
	      		this.controller.set('isPreviewScene',false);
	      	} else {
				// Bubble the `willTransition` action so that
				// parent routes can decide whether or not to abort.
				return true;
			}
	    }
    }
});
