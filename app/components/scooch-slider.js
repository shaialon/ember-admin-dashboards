import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		this.$('.m-scooch').scooch();
		var that= this;
		this.$('.m-scooch').on('afterSlide',function(e,e2,toIndex){
			that.sendAction('action', (toIndex-1) );
		});
	},

	willDestroyElement: function(){
		this.$('.m-scooch').scooch('destroy');
	}
});
