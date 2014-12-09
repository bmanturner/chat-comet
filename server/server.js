Meteor.startup(function () {
	// Clears message colleciton on start-up
	Messages.remove({});

	// Monitors users online status and keeps log of activity
	Meteor.users.find({ "status.online": true }).observe({
		// User comes online
	    added: function(id) {
	    	if(id) {
				var username = id.username;
				var message = "entered the chatroom";
				var messageType = 'login';
				Meteor.call('logEvent', username, message, messageType);
			}
	  	},
	  	// User goes offline
	  	removed: function(id) {
	    	if(id) {
				var username = id.username;
				var message = "left the chatroom";
				var messageType = 'logout';
				Meteor.call('logEvent', username, message, messageType);
			}
	  	}
	});
});



// Meteor methods to add messages or events
Meteor.methods({
	addMessage: function (username, usermessage) {
		check(username, String);
		check(usermessage, String);
		Messages.insert({
			userID: this.userId,
			user: username,
			message: usermessage,
			msgEvent: 'message',
			creation_date: new Date()
		});
	},
	logEvent: function (username, logmessage, type) {
		check(username, String);
		check(logmessage, String);
		Messages.insert({
			userID: this.userId,
			user: username,
			message: logmessage,
			msgEvent: type,
			creation_date: new Date()
		});
	}
});