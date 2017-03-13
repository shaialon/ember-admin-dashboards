import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		  // var socket = window.io.connect('http://localhost:3000');
	      var map, markers = [];
	      var that = this;
	      var currentLocation;

	      that.set('markers',markers);

	      // // Subscribe to socket `connect` event.
	      // socket.on('connect', function() {
	      //   console.log('Socket connection established.');
	      // });

	      // // Subscribe to socket `disconnect` event.
	      // socket.on('disconnect', function() {
	      //   console.log('Socket connection interrupted.');
	      // });

	      // // Subscribe to `tweet` events on the socket.
	      // socket.on('tweet', function(tweet) {
	      //   that.tweetRecieved(tweet);
	      // });

	      // Callback function when the geolocation is retrieved.
	      function geolocationSuccess(position) {
	        if (currentLocation) {
	          return;
	        }
	        var map = that.get('map');

	        currentLocation = position;
	        var longitude = position.coords.longitude;
	        var latitude = position.coords.latitude;

	        // Position the map.
	        var centerPosition = new google.maps.LatLng(latitude, longitude);
	        new google.maps.Marker({
	          map: map,
	          position: centerPosition,
	          icon: {
	            path: google.maps.SymbolPath.CIRCLE,
	            scale: 7,
	            strokeColor: '#55acee'
	          }
	        });
	        map.setCenter(centerPosition);

	        // Determine the bounds of the map when it is ready.
	        // google.maps.event.addListener(that.get('map'), 'idle', function() {
	        //   // Bounds of the map.
	        //   var bounds = map.getBounds();

	        //   // String representing the bounding box (SW coordinates, NE coordinates).
	        //   var locations = bounds.getSouthWest().lng() + ',' +
	        //                   bounds.getSouthWest().lat() + ',' +
	        //                   bounds.getNorthEast().lng() + ',' +
	        //                   bounds.getNorthEast().lat();

	        //   // Emit the `stream` event with the locations on the socket.
	        //   // socket.emit('stream', { locations: locations });
	        // });
	      }

	      // Callback function when the geolocation is not supported.
	      function geolocationError() {
	        var options = {
	          map: map,
	          position: new google.maps.LatLng(48.8566, 2.3522),
	          content: 'Oops, location not found.'
	        };

	        // var errorNotice = new google.maps.InfoWindow(options);
	        map.setCenter(options.position);
	      }

	      // Initialize the map.
	      function initializeMap() {
	        var mapOptions = {
		        zoom: 3,

	            // This is where you would paste any style found on Snazzy Maps.
	            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
	        };
	        map = new google.maps.Map($('.map')[0], mapOptions);
	        that.set('map',map);
	        // Request the user geolocation.
	        if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
	        } else {
	          geolocationError();
	        }
	      }
	      initializeMap();
	},

	tweetRecieved: function(tweet){
		var geo = tweet.coordinates;
		var that = this;
        var map = that.get('map');
        var markers =  that.get('markers');
        // Check if the geo type is a Point (it can also be a Polygon).
        if (geo && geo.type === 'Point') {
          // Display a marker for the Tweet on the map.
          var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(geo.coordinates[1], geo.coordinates[0]),
            animation: google.maps.Animation.DROP,
            title: '@' + tweet.user.screen_name + ': ' + tweet.text,
            icon: {
              url: tweet.user.profile_image_url.slice(5),
              size: new google.maps.Size(32, 32),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(16, 16),
              scaledSize: new google.maps.Size(32, 32)
            }
          });
          // Set metadata to the marker to identify the Tweet.
          marker.setValues({tweet: tweet});
          markers.push(marker);
          // Display a modal box with the embedded Tweet when click on the marker.
          google.maps.event.addListener(marker, 'click', function() {
            $('.modal-body').html('<blockquote class="twitter-tweet" align="center"><p>' + marker.get('tweet').text + '</p><small>@' + marker.get('tweet').user.screen_name + ' <a href="https://twitter.com/' + marker.get('tweet').user.screen_name + '/status/' + marker.get('tweet').id_str + '">' + marker.get('tweet').created_at + '</a></small></blockquote>');
            twttr.widgets.load();
            $('.modal').modal('show');
          });
          // Remove old markers when there are more than 300 on the map.
          if (markers.length > 3000) {
            markers[0].setMap(null);
            markers.shift();
          }
        }
        else {
        	// FYI: most tweets don't reach the map because they are
        }
	},

	_register: function() {
	    this.set('register-as', this); // register-as is a new property
	}.on('didRender'),
});
