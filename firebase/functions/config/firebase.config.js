var firebase = require("firebase");

var config = {
	apiKey: "AIzaSyB7EIeKMYdKm1V4Q7KXyocy0DkWwOfyhRs",
	authDomain: "fir-7aa85.firebaseapp.com",
	databaseURL: "https://fir-7aa85.firebaseio.com",
	projectId: "fir-7aa85",
	storageBucket: "fir-7aa85.appspot.com",
	messagingSenderId: "803237973390"
};

firebase.initializeApp(config);

module.exports = firebase