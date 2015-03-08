import Ember from 'ember';

export default Ember.Component.extend({

	// Settings
	// classNames: ["col-md-3","col-sm-6","col-xs-12"],
	classNameBindings: ['responsiveClass'],
	// Params
	title: null,
	metric: null,
	type: 'number', // number, percentage, string...
	ion: null,
	fa: null,
	color: null,
	full: false, // show full color?
	responsive: true,

	fullClass: function(){
		if(!this.get('full')){return '';}
		return 'bg-'+this.get('color');
	}.property('color','full'),

	responsiveClass: function(){
		if(!this.get('responsive')){return '';}
		return "col-md-3 col-sm-6 col-xs-12";
	}.property('responsive'),

	// Computed state
	bgClass: function(){
		if(!this.get('color')){return '';}
		if(this.get('full')){return '';}
		return 'bg-'+this.get('color');
	}.property('color','full'),

	iconClass: function(){
		var classStr ='';
		if (this.get('ion')){
			classStr += 'ion ion-'+this.get('ion');
		}
		else if (this.get('fa')){
			classStr += 'fa fa-'+this.get('fa');
		}
		return classStr;
	}.property('ion','fa'),

	isPercentage: Ember.computed.equal('type','percentage'),

	// Logic.
	didInsertElement: function(){
		console.log("infobox!");
	}
});