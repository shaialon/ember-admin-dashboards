import Ember from 'ember';

export default Ember.Controller.extend({
	title: 'Edit this box title..',
	labelText: '',
	isClosable: true,
	isCollapsable: true,
	isLoading : false,
	buttonsOn: false,
	styleOptions: ['clear','solid','background'],
	selectedStyle : 'solid',

	backGroundOptions: ['navy','light-blue','aqua','red','green','yellow','purple','blue','maroon'],
	selectedBackground : 'navy',

	colorScemeOptions: ['default','primary','info','danger','success','warning'],
	selectedColorSceme : 'primary',

	// Computed
	isSolid: Ember.computed.equal('selectedStyle','solid'),
	isBackground: Ember.computed.equal('selectedStyle','background'),

	emberBindingExample: 'Ember dynamic binding',

	backgroundParam: function(){
		if(!this.get('isBackground')){return null;}
		return this.get('selectedBackground');
	}.property('selectedBackground','isBackground'),

	colorScemeParam: function(){
		if(this.get('isBackground')){return null;}
		return this.get('selectedColorSceme');
	}.property('selectedColorSceme','isBackground'),


});
