import Ember from 'ember';

export default Ember.Component.extend({
	height: 300,
	data: [],

	didInsertElement: function(){
		this._super();
		this.$().css({height:this.get('height')});
		var data = this.get('data');
		if(!data || data.length===0){
			this.set('_error',true);
			return;
		}
		this.$().vectorMap({
		    map: 'world_mill_en',
		    normalizeFunction: 'polynomial',
		    hoverOpacity: 0.7,
		    hoverColor: false,
		    backgroundColor: 'transparent',
		    regionStyle: {
		      initial: {
		        fill: 'rgba(210, 214, 222, 1)',
		        "fill-opacity": 1,
		        stroke: 'none',
		        "stroke-width": 0,
		        "stroke-opacity": 1
		      },
		      hover: {
		        "fill-opacity": 0.7,
		        cursor: 'pointer'
		      },
		      selected: {
		        fill: 'yellow'
		      },
		      selectedHover: {
		      }
		    },
		    markerStyle: {
		      initial: {
		        fill: '#00a65a',
		        stroke: '#111'
		      }
		    },
		    markers: data
		  });
	},
});
