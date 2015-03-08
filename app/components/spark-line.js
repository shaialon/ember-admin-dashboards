import Ember from 'ember';

export default Ember.Component.extend({
	type: 'line',
	height: 20,
	data: [],
	// TODO: ADD color, params and other attributes from http://omnipotent.net/jquery.sparkline/#s-about

	didInsertElement: function(){
		this._super();
	},

	renderLine: function(){
		var sparkData = this.get('data');
		var sparkConfig = this.sparkConfig();

		this.$().sparkline(sparkData, sparkConfig);
	},

	sparkConfig: function(){
		var sparkConfig =  {
		    type: this.get('type'),
		    height: this.get('height'),
		};
		if(this.get('barColor')){
			sparkConfig.barColor = this.get('barColor');
		}
		return sparkConfig;
	},

	dataObserver: function(){
		this.renderLine();
	}.observes('data').on('didInsertElement'),

});
