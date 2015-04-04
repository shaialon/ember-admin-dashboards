import Ember from 'ember';

export default Ember.Controller.extend({
	flaggedDrilled: false,
	init: function(){
		this.connectToFeed();

	},

	connectToFeed: function(){
		var socket = window.io.connect('https://twitter-stream-embe.herokuapp.com/');
		var count = 0;
		// var now, start = new Date();
		// var tps = 0;
		var that = this;
		that.initData();

		var languages = {

		};

		var languagesDelta = {

		};

		var langDisp = {
		    "ab":{
		        "name":"Abkhaz",
		    },
		    "aa":{
		        "name":"Afar",
		    },
		    "af":{
		        "name":"Afrikaans",
		    },
		    "ak":{
		        "name":"Akan",
		    },
		    "sq":{
		        "name":"Albanian",
		    },
		    "am":{
		        "name":"Amharic",
		    },
		    "ar":{
		        "name":"Arabic",
		    },
		    "an":{
		        "name":"Aragonese",
		    },
		    "hy":{
		        "name":"Armenian",
		    },
		    "as":{
		        "name":"Assamese",
		    },
		    "av":{
		        "name":"Avaric",
		    },
		    "ae":{
		        "name":"Avestan",
		    },
		    "ay":{
		        "name":"Aymara",
		    },
		    "az":{
		        "name":"Azerbaijani",
		    },
		    "bm":{
		        "name":"Bambara",
		    },
		    "ba":{
		        "name":"Bashkir",
		    },
		    "eu":{
		        "name":"Basque",
		    },
		    "be":{
		        "name":"Belarusian",
		    },
		    "bn":{
		        "name":"Bengali",
		    },
		    "bh":{
		        "name":"Bihari",
		    },
		    "bi":{
		        "name":"Bislama",
		    },
		    "bs":{
		        "name":"Bosnian",
		    },
		    "br":{
		        "name":"Breton",
		    },
		    "bg":{
		        "name":"Bulgarian",
		    },
		    "my":{
		        "name":"Burmese",
		    },
		    "ca":{
		        "name":"Catalan; Valencian",
		    },
		    "ch":{
		        "name":"Chamorro",
		    },
		    "ce":{
		        "name":"Chechen",
		    },
		    "ny":{
		        "name":"Chichewa; Chewa; Nyanja",
		    },
		    "zh":{
		        "name":"Chinese",
		    },
		    "cv":{
		        "name":"Chuvash",
		    },
		    "kw":{
		        "name":"Cornish",
		    },
		    "co":{
		        "name":"Corsican",
		    },
		    "cr":{
		        "name":"Cree",
		    },
		    "hr":{
		        "name":"Croatian",
		    },
		    "cs":{
		        "name":"Czech",
		    },
		    "da":{
		        "name":"Danish",
		    },
		    "dv":{
		        "name":"Divehi; Dhivehi; Maldivian;",
		    },
		    "nl":{
		        "name":"Dutch",
		    },
		    "en":{
		        "name":"English",
		    },
		    "eo":{
		        "name":"Esperanto",
		    },
		    "et":{
		        "name":"Estonian",
		    },
		    "ee":{
		        "name":"Ewe",
		    },
		    "fo":{
		        "name":"Faroese",
		    },
		    "fj":{
		        "name":"Fijian",
		    },
		    "fi":{
		        "name":"Finnish",
		    },
		    "fr":{
		        "name":"French",
		    },
		    "ff":{
		        "name":"Fula; Fulah; Pulaar; Pular",
		    },
		    "gl":{
		        "name":"Galician",
		    },
		    "ka":{
		        "name":"Georgian",
		    },
		    "de":{
		        "name":"German",
		    },
		    "el":{
		        "name":"Greek, Modern",
		    },
		    "gn":{
		        "name":"Guaraní",
		    },
		    "gu":{
		        "name":"Gujarati",
		    },
		    "ht":{
		        "name":"Haitian; Haitian Creole",
		    },
		    "ha":{
		        "name":"Hausa",
		    },
		    "he":{
		        "name":"Hebrew (modern)",
		    },
		    "hz":{
		        "name":"Herero",
		    },
		    "hi":{
		        "name":"Hindi",
		    },
		    "ho":{
		        "name":"Hiri Motu",
		    },
		    "hu":{
		        "name":"Hungarian",
		    },
		    "ia":{
		        "name":"Interlingua",
		    },
		    "id":{
		        "name":"Indonesian",
		    },
		    "ie":{
		        "name":"Interlingue",
		    },
		    "ga":{
		        "name":"Irish",
		    },
		    "ig":{
		        "name":"Igbo",
		    },
		    "ik":{
		        "name":"Inupiaq",
		    },
		    "io":{
		        "name":"Ido",
		    },
		    "is":{
		        "name":"Icelandic",
		    },
		    "it":{
		        "name":"Italian",
		    },
		    "iu":{
		        "name":"Inuktitut",
		    },
		    "ja":{
		        "name":"Japanese",
		    },
		    "jv":{
		        "name":"Javanese",
		    },
		    "kl":{
		        "name":"Kalaallisut, Greenlandic",
		    },
		    "kn":{
		        "name":"Kannada",
		    },
		    "kr":{
		        "name":"Kanuri",
		    },
		    "ks":{
		        "name":"Kashmiri",
		    },
		    "kk":{
		        "name":"Kazakh",
		    },
		    "km":{
		        "name":"Khmer",
		    },
		    "ki":{
		        "name":"Kikuyu, Gikuyu",
		    },
		    "rw":{
		        "name":"Kinyarwanda",
		    },
		    "ky":{
		        "name":"Kirghiz, Kyrgyz",
		    },
		    "kv":{
		        "name":"Komi",
		    },
		    "kg":{
		        "name":"Kongo",
		    },
		    "ko":{
		        "name":"Korean",
		    },
		    "ku":{
		        "name":"Kurdish",
		    },
		    "kj":{
		        "name":"Kwanyama, Kuanyama",
		    },
		    "la":{
		        "name":"Latin",
		    },
		    "lb":{
		        "name":"Luxembourgish, Letzeburgesch",
		    },
		    "lg":{
		        "name":"Luganda",
		    },
		    "li":{
		        "name":"Limburgish, Limburgan, Limburger",
		    },
		    "ln":{
		        "name":"Lingala",
		    },
		    "lo":{
		        "name":"Lao",
		    },
		    "lt":{
		        "name":"Lithuanian",
		    },
		    "lu":{
		        "name":"Luba-Katanga",
		    },
		    "lv":{
		        "name":"Latvian",
		    },
		    "gv":{
		        "name":"Manx",
		    },
		    "mk":{
		        "name":"Macedonian",
		    },
		    "mg":{
		        "name":"Malagasy",
		    },
		    "ms":{
		        "name":"Malay",
		    },
		    "ml":{
		        "name":"Malayalam",
		    },
		    "mt":{
		        "name":"Maltese",
		    },
		    "mi":{
		        "name":"Māori",
		    },
		    "mr":{
		        "name":"Marathi (Marāṭhī)",
		    },
		    "mh":{
		        "name":"Marshallese",
		    },
		    "mn":{
		        "name":"Mongolian",
		    },
		    "na":{
		        "name":"Nauru",
		    },
		    "nv":{
		        "name":"Navajo, Navaho",
		    },
		    "nb":{
		        "name":"Norwegian Bokmål",
		    },
		    "nd":{
		        "name":"North Ndebele",
		    },
		    "ne":{
		        "name":"Nepali",
		    },
		    "ng":{
		        "name":"Ndonga",
		    },
		    "nn":{
		        "name":"Norwegian Nynorsk",
		    },
		    "no":{
		        "name":"Norwegian",
		    },
		    "ii":{
		        "name":"Nuosu",
		    },
		    "nr":{
		        "name":"South Ndebele",
		    },
		    "oc":{
		        "name":"Occitan",
		    },
		    "oj":{
		        "name":"Ojibwe, Ojibwa",
		    },
		    "cu":{
		        "name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
		    },
		    "om":{
		        "name":"Oromo",
		    },
		    "or":{
		        "name":"Oriya",
		    },
		    "os":{
		        "name":"Ossetian, Ossetic",
		    },
		    "pa":{
		        "name":"Panjabi, Punjabi",
		    },
		    "pi":{
		        "name":"Pāli",
		    },
		    "fa":{
		        "name":"Persian",
		    },
		    "pl":{
		        "name":"Polish",
		    },
		    "ps":{
		        "name":"Pashto, Pushto",
		    },
		    "pt":{
		        "name":"Portuguese",
		    },
		    "qu":{
		        "name":"Quechua",
		    },
		    "rm":{
		        "name":"Romansh",
		    },
		    "rn":{
		        "name":"Kirundi",
		    },
		    "ro":{
		        "name":"Romanian, Moldavian, Moldovan",
		    },
		    "ru":{
		        "name":"Russian",
		    },
		    "sa":{
		        "name":"Sanskrit (Saṁskṛta)",
		    },
		    "sc":{
		        "name":"Sardinian",
		    },
		    "sd":{
		        "name":"Sindhi",
		    },
		    "se":{
		        "name":"Northern Sami",
		    },
		    "sm":{
		        "name":"Samoan",
		    },
		    "sg":{
		        "name":"Sango",
		    },
		    "sr":{
		        "name":"Serbian",
		    },
		    "gd":{
		        "name":"Scottish Gaelic; Gaelic",
		    },
		    "sn":{
		        "name":"Shona",
		    },
		    "si":{
		        "name":"Sinhala, Sinhalese",
		    },
		    "sk":{
		        "name":"Slovak",
		    },
		    "sl":{
		        "name":"Slovene",
		    },
		    "so":{
		        "name":"Somali",
		    },
		    "st":{
		        "name":"Southern Sotho",
		    },
		    "es":{
		        "name":"Spanish; Castilian",
		    },
		    "su":{
		        "name":"Sundanese",
		    },
		    "sw":{
		        "name":"Swahili",
		    },
		    "ss":{
		        "name":"Swati",
		    },
		    "sv":{
		        "name":"Swedish",
		    },
		    "ta":{
		        "name":"Tamil",
		    },
		    "te":{
		        "name":"Telugu",
		    },
		    "tg":{
		        "name":"Tajik",
		    },
		    "th":{
		        "name":"Thai",
		    },
		    "ti":{
		        "name":"Tigrinya",
		    },
		    "bo":{
		        "name":"Tibetan Standard, Tibetan, Central",
		    },
		    "tk":{
		        "name":"Turkmen",
		    },
		    "tl":{
		        "name":"Tagalog",
		    },
		    "tn":{
		        "name":"Tswana",
		    },
		    "to":{
		        "name":"Tonga (Tonga Islands)",
		    },
		    "tr":{
		        "name":"Turkish",
		    },
		    "ts":{
		        "name":"Tsonga",
		    },
		    "tt":{
		        "name":"Tatar",
		    },
		    "tw":{
		        "name":"Twi",
		    },
		    "ty":{
		        "name":"Tahitian",
		    },
		    "ug":{
		        "name":"Uighur, Uyghur",
		    },
		    "uk":{
		        "name":"Ukrainian",
		    },
		    "ur":{
		        "name":"Urdu",
		    },
		    "uz":{
		        "name":"Uzbek",
		    },
		    "ve":{
		        "name":"Venda",
		    },
		    "vi":{
		        "name":"Vietnamese",
		    },
		    "vo":{
		        "name":"Volapük",
		    },
		    "wa":{
		        "name":"Walloon",
		    },
		    "cy":{
		        "name":"Welsh",
		    },
		    "wo":{
		        "name":"Wolof",
		    },
		    "fy":{
		        "name":"Western Frisian",
		    },
		    "xh":{
		        "name":"Xhosa",
		    },
		    "yi":{
		        "name":"Yiddish",
		    },
		    "yo":{
		        "name":"Yoruba",
		    },
		    "za":{
		        "name":"Zhuang, Chuang",
		    }
		};

		// var sensitive ={
		// 	sensitive : 0,
		// 	unsensitive: 0,
		// };

		// Display the udpated the TPS.
		setInterval(function() {
			that.set('tweetCount',count);

		}, 5);

		setInterval(function() {
			// now = new Date();
			// tps = parseInt(1000 * count / (now - start), 10);
			// // document.getElementById('tps').innerText = tps;
			// // console.log("TPS: "+tps);
			// that.set('tweetsPerSecond',tps);
			// that.set('tweetsPerSecondScale',tps/2);
			// that.set('tweetCount',count);
			var tmpLang;
			var languagesArr = that.get('languagesArr');
			var languagesMap = that.get('languagesMap');

			for (var prop in languages){
				if(languagesMap[prop]){
					// Exists
					languagesMap[prop].set('count',languages[prop]);
					var tmpTrend = languagesMap[prop].get('trend');
					tmpTrend.push(languagesDelta[prop]);
					languagesMap[prop].set('trend',  tmpTrend.slice(Math.max(tmpTrend.length - 8 ,0) , tmpTrend.length)         );
					languagesDelta[prop]=0;
				} else {
					// Create lang for the first time and map it
					tmpLang = Em.Object.create({
						id: prop,
						count: languages[prop],
						displayName: (langDisp[prop] ? langDisp[prop].name : null) || prop,
						trend: [languagesDelta[prop]],
					});
					languagesDelta[prop]=0;
					languagesArr.pushObject(tmpLang);
					languagesMap[prop] = tmpLang;
				}
			}
		}, 100);

		// Subscribe to `connect` events on the socket.
		socket.on('connect', function() {
		console.log('Socket connection established.');
		// Send a `stream` event to start streaming.
		socket.emit('stream', { endpoint: 'statuses/sample' });
		});

		// Subscribe to `disconnect` events on the socket.
		socket.on('disconnect', function() {
		console.log('Socket connection interrupted.');
		});

		// Subscribe to Tweet events on the socket.
		socket.on('tweet', function(data) {
			// for(	var i=0 ; i< 5; i++){
				logData(data);
				count++;
			// }
			// Debounce the function updating the count to make sure it's not called too many times per second.

			// Note: We could have sent only the updated count over the socket for this example,
			// but having the Tweet information here enable to do more on your interface if you wish.
		});

		function logData(data){
			if(data.lang){
				if(!languages[data.lang]){
					languages[data.lang] = 0;
					languagesDelta[data.lang] = 0;
				}
				languages[data.lang]++;
				languagesDelta[data.lang]++;
			}
			if(data.possibly_sensitive){
				that.incrementProperty('flaggedTweets');
			}
			if(that.get('fullscreenMap')){
				that.get('fullscreenMap').tweetRecieved(data);
			}
		}
	},
	initData: function(){
		var that = this;
		that.set('tweetCount',0);
		that.set('flaggedTweets',0);
		var languagesArr = Ember.ArrayController.create({
			sortProperties: ['count'],
  			sortAscending: false
		});
		languagesArr.set('sortProperty','count');
		that.set('languagesArr',languagesArr);
		that.set('languagesMap',{});
	},

	tweetsPerSecondScaleStyle: function(){
		var tweetsPerSecondScale = this.get('tweetsPerSecondScale');
		if(!tweetsPerSecondScale){
			return 'width: 40%;';
		}
		return 'width: '+tweetsPerSecondScale+'%;';
	}.property('tweetsPerSecondScale'),

	actions: {
		drilldownFlagged: function(){
			this.set('flaggedDrilled',true);
		},
	}

});
