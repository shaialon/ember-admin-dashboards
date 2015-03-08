import Ember from 'ember';

export default Ember.Controller.extend({
	cpuUsage: 77,
	gPlusLikes:2,
	sales: 760,
	newMembers: 2000,


	inventory: 5200,
	mentions:91000,
	downloads: 110002,
	messages: 189200,

	Orders: [
		{
			id: 'qweasd',
			name: 'Call of Duty IV',
			status: 'shipped',
		}
	],

	newMembersArr: [
		{
          imgUrl: 'dist/img/user1-128x128.jpg',
          name:    'Alexander Pierce',
          signUpDate: 'Today',
        },
        {
          imgUrl: 'dist/img/user8-128x128.jpg',
          name:    'Norman',
          signUpDate: 'Yesterday',
        },
        {
          imgUrl: 'dist/img/user7-128x128.jpg',
          name:    'Jane',
          signUpDate: '12 Jan',
        },
        {
          imgUrl: 'dist/img/user6-128x128.jpg',
          name:    'John',
          signUpDate: '12 Jan',
        },
        {
          imgUrl: 'dist/img/user2-160x160.jpg',
          name:    'Alexander',
          signUpDate: '13 Jan',
        },
        {
          imgUrl: 'dist/img/user5-128x128.jpg',
          name:    'Sarah',
          signUpDate: '14 Jan',
        },
        {
          imgUrl: 'dist/img/user4-128x128.jpg',
          name:    'Nora',
          signUpDate: '15 Jan',
        },
        {
          imgUrl: 'dist/img/user3-128x128.jpg',
          name:    'Nadia',
          signUpDate: '15 Jan',
        },
	],

	visitorLocations: [
		      {latLng: [41.90, 12.45], name: 'Vatican City'},
		      {latLng: [43.73, 7.41], name: 'Monaco'},
		      {latLng: [-0.52, 166.93], name: 'Nauru'},
		      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
		      {latLng: [43.93, 12.46], name: 'San Marino'},
		      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
		      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
		      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
		      {latLng: [3.2, 73.22], name: 'Maldives'},
		      {latLng: [35.88, 14.5], name: 'Malta'},
		      {latLng: [12.05, -61.75], name: 'Grenada'},
		      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
		      {latLng: [13.16, -59.55], name: 'Barbados'},
		      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
		      {latLng: [-4.61, 55.45], name: 'Seychelles'},
		      {latLng: [7.35, 134.46], name: 'Palau'},
		      {latLng: [42.5, 1.51], name: 'Andorra'},
		      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
		      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
		      {latLng: [1.3, 103.8], name: 'Singapore'},
		      {latLng: [1.46, 173.03], name: 'Kiribati'},
		      {latLng: [-21.13, -175.2], name: 'Tonga'},
		      {latLng: [15.3, -61.38], name: 'Dominica'},
		      {latLng: [-20.2, 57.5], name: 'Mauritius'},
		      {latLng: [26.02, 50.55], name: 'Bahrain'},
		      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
		    ],

	init: function(){
		console.log("Logic here");
		this.gPlusTime();
		this.changeMocks();
	},

	generateMock: function(){
		var newArr = [];
		for (var i =0 ; i< 10 ; i++){
			newArr.push( Math.ceil(Math.random()*100) );
		}
		return newArr;
	},
	changeMocks: function(){
		var that = this;
		that.set('mock1',that.generateMock());
		that.set('mock2',that.generateMock());

		Ember.run.later(function(){
			that.changeMocks();
		},3000);
	},


	gPlusTime: function(){
		var that = this;
		var gPlusLikes = that.get('gPlusLikes');
		var adder = Math.ceil(Math.random()*120 / gPlusLikes);
		var timer = 120 + Math.ceil(gPlusLikes/100);
		Ember.run.later(function(){
			that.set('gPlusLikes',gPlusLikes+adder);
			that.gPlusTime();
		},timer);
	},
});
